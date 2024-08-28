'use client'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimationProps {
  initial?: object;
  animate?: object;
  transition?: object;
}

const AnimatedSection = ({ children, animation }: { children: React.ReactNode, animation: AnimationProps }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const defaultAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const { initial, animate, transition } = { ...defaultAnimation, ...animation };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;