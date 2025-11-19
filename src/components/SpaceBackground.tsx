import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useLocation } from 'react-router-dom';

// --- Helper Functions ---

const createPlanetTexture = (type: 'gas' | 'rocky' | 'water' | 'earth', baseColor: string, detailColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512; // 2:1 aspect for spherical mapping
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 512);
  ctx.fillStyle = detailColor;

  if (type === 'gas') {
    for (let i = 0; i < 20; i++) {
      if (Math.random() > 0.4) {
        const y = Math.random() * 512;
        const height = Math.random() * 50 + 10;
        ctx.fillRect(0, y, 1024, height);
      }
    }
  } else if (type === 'rocky') {
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const r = Math.random() * 30 + 5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'water') {
    for (let i = 0; i < 15; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const r = Math.random() * 80 + 20;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (type === 'earth') {
    // Improved Procedural Earth
    // Ocean Base
    ctx.fillStyle = '#1a3b6e'; // Deep Blue
    ctx.fillRect(0, 0, 1024, 512);
    
    // Continents (Green/Brown)
    // Use multiple layers of random blobs for more natural look
    const drawContinent = (x: number, y: number, w: number, h: number) => {
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
    };

    ctx.fillStyle = '#2d5a27'; // Forest Green
    for (let i = 0; i < 15; i++) {
        drawContinent(Math.random() * 1024, Math.random() * 512, Math.random() * 100 + 20, Math.random() * 80 + 20);
    }
    
    ctx.fillStyle = '#8b5a2b'; // Brown/Mountain
    for (let i = 0; i < 10; i++) {
        drawContinent(Math.random() * 1024, Math.random() * 512, Math.random() * 60 + 10, Math.random() * 50 + 10);
    }

    // Clouds (White, semi-transparent)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const w = Math.random() * 150 + 20;
      const h = Math.random() * 20 + 5;
      ctx.fillRect(x, y, w, h);
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  return texture;
};

// --- Planet Configuration ---

const PLANET_CONFIGS = [
  { distance: 4, size: 0.2, color: "#A5A5A5", detailColor: "#808080", speed: 1.2, offset: 0, type: 'rocky' },
  { distance: 6, size: 0.4, color: "#E3BB76", detailColor: "#D4A045", speed: 0.9, offset: 2, type: 'gas' },
  { distance: 9, size: 0.5, color: "#4B9CD3", detailColor: "#2E8B57", speed: 0.6, offset: 4, type: 'earth' },
  { distance: 12, size: 0.3, color: "#D14A28", detailColor: "#8B3218", speed: 0.5, offset: 1, type: 'rocky' },
  { distance: 18, size: 1.8, color: "#C88B3A", detailColor: "#8B5A2B", speed: 0.2, offset: 5, type: 'gas' },
  { distance: 24, size: 1.5, color: "#E2BF7D", detailColor: "#CBA35C", speed: 0.15, offset: 3, type: 'gas', hasRings: true },
  { distance: 30, size: 1.0, color: "#93B8BE", detailColor: "#7A9AA0", speed: 0.1, offset: 6, type: 'gas', hasRings: true },
  { distance: 35, size: 1.0, color: "#5B5DDF", detailColor: "#3A3CBF", speed: 0.08, offset: 2, type: 'gas' },
];

// --- Components ---

const Sun = () => (
  <mesh>
    <sphereGeometry args={[2.5, 64, 64]} />
    <meshToonMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2} />
    <pointLight intensity={4} distance={100} decay={2} />
  </mesh>
);

const OrbitLine = ({ radius }: { radius: number }) => {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * 2 * Math.PI;
      pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
    }
    return pts;
  }, [radius]);
  const lineGeometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points]);
  return (
    // @ts-ignore
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#ffffff" opacity={0.1} transparent />
    </line>
  );
};

const Planet = ({ distance, size, color, speed, offset = 0, type = 'rocky', detailColor = '#000000', hasRings = false, isViewed = false, children }: any) => {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useMemo(() => createPlanetTexture(type, color, detailColor), [type, color, detailColor]);
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed + offset;
      ref.current.position.x = Math.cos(t) * distance;
      ref.current.position.z = Math.sin(t) * distance;
      
      // Rotation speed: slower if viewed
      const rotationSpeed = isViewed ? 0.001 : 0.005;
      ref.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshToonMaterial map={texture} color={color} />
        {hasRings && (
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[size * 1.4, size * 2.2, 32]} />
            <meshToonMaterial color={detailColor} side={THREE.DoubleSide} transparent opacity={0.6} />
          </mesh>
        )}
        {children}
      </mesh>
      <OrbitLine radius={distance} />
    </group>
  );
};

// --- Scene Component ---

const Scene = ({ targetPlanetIndex }: { targetPlanetIndex: number }) => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Stars radius={150} depth={50} count={8000} factor={4} saturation={0} fade speed={0.5} />
      <Sun />
      
      {PLANET_CONFIGS.map((planet, index) => (
        <Planet 
          key={index}
          distance={planet.distance} 
          size={planet.size} 
          color={planet.color} 
          detailColor={planet.detailColor} 
          speed={planet.speed} 
          offset={planet.offset} 
          type={planet.type}
          hasRings={planet.hasRings}
          isViewed={isProjectPage && index === targetPlanetIndex}
        >
          {planet.type === 'earth' && (
            <group rotation={[0, 0, 0.4]}> 
                <mesh position={[0.45, 0.15, 0.1]}> 
                    <sphereGeometry args={[0.03, 16, 16]} />
                    <meshBasicMaterial color="#FF4500" toneMapped={false} />
                    <pointLight color="#FF4500" distance={1} intensity={2} />
                </mesh>
            </group>
          )}
        </Planet>
      ))}
      
      <CameraController targetPlanetIndex={targetPlanetIndex} />
    </>
  );
};

// --- Camera Controller ---

const CameraController = ({ targetPlanetIndex }: { targetPlanetIndex: number }) => {
  const { camera } = useThree();
  const location = useLocation();
  
  // Constants for Earth (must match Scene/Config)
  const EARTH_DIST = 9;
  const EARTH_SPEED = 0.6;
  const EARTH_OFFSET = 4;

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    let targetPos = new THREE.Vector3(0, 20, 45); // Default Overview
    let lookAtPos = new THREE.Vector3(0, 0, 0);

    if (location.pathname === '/projects') {
      // Top-down view of the solar system (Overview)
      targetPos.set(0, 60, 0);
      lookAtPos.set(0, 0, 0);

    } else if (location.pathname.startsWith('/projects/') && location.pathname !== '/projects') {
      // Project Page: Orbiting a random planet
      const planet = PLANET_CONFIGS[targetPlanetIndex];
      
      // Calculate Planet's current position
      const planetT = t * planet.speed + planet.offset;
      const planetX = Math.cos(planetT) * planet.distance;
      const planetZ = Math.sin(planetT) * planet.distance;
      
      // Dynamic Camera Positioning based on Planet Size
      const distOffset = 2.5 + (planet.size * 4);
      const heightOffset = 1.5 + (planet.size * 3);

      // Add a slow orbit for the camera around the planet
      const cameraOrbitSpeed = 0.1;
      const cameraAngle = t * cameraOrbitSpeed;
      
      // Calculate camera position relative to planet
      const camX = Math.sin(cameraAngle) * distOffset;
      const camZ = Math.cos(cameraAngle) * distOffset;

      targetPos.set(planetX + camX, heightOffset, planetZ + camZ);
      
      // Look at the planet
      lookAtPos.set(planetX, 0, planetZ);

    } else if (location.pathname === '/about') {
      // Orbiting Earth
      // Calculate Earth's current position
      const earthT = t * EARTH_SPEED + EARTH_OFFSET;
      const earthX = Math.cos(earthT) * EARTH_DIST;
      const earthZ = Math.sin(earthT) * EARTH_DIST;
      
      targetPos.set(earthX + 3, 2, earthZ + 3);
      lookAtPos.set(earthX, 0, earthZ);
    }

    // Smooth interpolation
    state.camera.position.lerp(targetPos, 0.04);
    
    if (!state.camera.userData.currentLookAt) {
      state.camera.userData.currentLookAt = new THREE.Vector3(0, 0, 0);
    }
    
    state.camera.userData.currentLookAt.lerp(lookAtPos, 0.04);
    state.camera.lookAt(state.camera.userData.currentLookAt);
  });

  return null;
};

const SpaceBackground = () => {
  const location = useLocation();
  const isOverview = location.pathname === '/';
  const isProjectPage = location.pathname.startsWith('/projects/') && location.pathname !== '/projects';
  
  const shouldBlur = !isOverview && !isProjectPage;

  // Manage random planet selection here
  const [targetPlanetIndex, setTargetPlanetIndex] = useState(2); // Default to Earth

  useEffect(() => {
    if (isProjectPage) {
      // Pick a random planet index when entering a specific project page
      const randomIndex = Math.floor(Math.random() * PLANET_CONFIGS.length);
      setTargetPlanetIndex(randomIndex);
    }
  }, [location.pathname]);

  return (
    <div className={`fixed inset-0 z-0 transition-all duration-1000 ${shouldBlur ? 'blur-sm opacity-40' : 'blur-none opacity-100'}`}>
      <Canvas camera={{ position: [0, 20, 45], fov: 50 }}>
        <Scene targetPlanetIndex={targetPlanetIndex} />
      </Canvas>
    </div>
  );
};



export default SpaceBackground;
