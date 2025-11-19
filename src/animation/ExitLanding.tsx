import {motion} from 'framer-motion';
import {ReactNode} from 'react';

interface AnimatedPageProps {
  children: ReactNode;
}

const animations = {
  exit: { 
    x: "100vw",
    opacity: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
}

const buttonExit = {
    exit: { 
        y: "-100vw",
        opacity: 0, 
        transition: { duration: 1, ease: "easeOut" } 
    }
    }

export function ExitAnimation (props: AnimatedPageProps) {
  return (
  <motion.div
    exit="exit"
    variants={animations}
  >
    {props.children}
  </motion.div>
  );
};

export function ExitButtonAnimation(props: AnimatedPageProps) {
    return (
    <motion.div
        exit="exit"
        variants={buttonExit}
    >
        {props.children}
    </motion.div>
    );
}
