'use client'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function IdeaProject() {
    const [ref, isInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    const Circle = ({ x, y, size, color }: { x: number, y: number, size: number, color: string }) => {
      const springConfig = { stiffness: 100, damping: 30 }; // Configuration plus douce
      const offsetX = useSpring(useTransform(mouseX, (value) => (value - window.innerWidth / 2) * 0.02), springConfig);
      const offsetY = useSpring(useTransform(mouseY, (value) => (value - window.innerHeight / 2) * 0.02), springConfig);

      return (
        <motion.div
          className="absolute rounded-full"
          style={{
            x: useTransform(offsetX, (value) => x + value),
            y: useTransform(offsetY, (value) => y + value),
            width: size,
            height: size,
            backgroundColor: color,
          }}
        />
      );
    };

    return (
      <motion.div 
        ref={ref}
        className="my-16 relative overflow-hidden p-4 sm:p-6 md:p-8 rounded-xl bg-gradient-radial from-[#1d1d1d1d] to-[#11111111]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Éléments décoratifs interactifs */}
        <Circle x={900} y={120} size={40} color="rgba(15, 15, 15, 0.8)" />
        <Circle x={750} y={10} size={60} color="rgba(55, 9, 93, 0.8)" />
        <Circle x={650} y={180} size={30} color="rgba(112, 44, 139, 0.8)" />
        <Circle x={480} y={200} size={50} color="rgba(48, 5, 77, 0.92)" />

        {/* Contenu CTA */}
        <div className="relative z-10 p-6">
          <motion.div 
            className="flex items-center mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaLightbulb className="text-yellow-300 text-3xl mr-3" />
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              Vous avez un projet en tête ?
            </h2>
          </motion.div>
          <motion.p 
            className="text-white w-full md:w-2/3 text-sm sm:text-base mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Que vous ayez besoin d&apos;améliorer vos systèmes SAP existants ou de mettre en œuvre de nouvelles solutions, je suis là pour vous aider à concrétiser vos projets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/Contact" className="inline-flex mt-5 items-center rounded-lg text-white px-6 py-3 text-base font-medium rounded-fullbg-[#242424] border border-[#393939] hover:bg-purple-700 hover:text-white transition-colors">
              <span className="mr-2">Contactez-moi</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }