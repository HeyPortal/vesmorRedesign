import React from 'react';
import { useLightbox } from '../context/LightboxContext';
import { motion } from 'framer-motion';

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ className, src, alt, ...props }) => {
  const { openLightbox } = useLightbox();

  const handleClick = () => {
    if (src) {
      openLightbox(src, alt);
    }
  };

  return (
    <motion.div 
      className={`relative group cursor-zoom-in overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        {...props} 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
          Click to expand
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectImage;
