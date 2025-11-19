import {motion} from 'framer-motion';
import {ReactNode} from 'react';

interface AnimatedPageProps {
  children: ReactNode;
}

const animations = {
  initial: { 
    x: "100vw",
    y: "0vh", 
    opacity: 0 
  },
  animate: {
    x: 0,
    y: "0vh", 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    x: "-100vw",
    y: "0vh", 
    opacity: 0, 
    transition: { duration: 0.5, ease: "easeIn" } 
  }
}

export default function AnimatedPage (props: AnimatedPageProps) {
  return (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={animations}
  >
    {props.children}
  </motion.div>
  );
};
