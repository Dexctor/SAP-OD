'use client'
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { FaLightbulb, FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { MotionValue } from 'framer-motion/dom';

export default function IdeaProject() {
    const [ref, isInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    useEffect(() => {
      mouseX.set(mousePosition.x);
      mouseY.set(mousePosition.y);
    }, [mousePosition, mouseX, mouseY]);

    const Circle = ({ x, y, size, color }: { x: number, y: number, size: number, color: string }) => {
      const distance = useTransform<number[], number>(
        [mouseX, mouseY],
        ([latestX, latestY]) => Math.hypot(latestX - x, latestY - y)
      );
      const scale = useTransform(distance, [0, 300], [1.5, 1]);

      return (
        <motion.div
          className="absolute rounded-full cursor-pointer"
          style={{
            x,
            y,
            width: size,
            height: size,
            backgroundColor: color,
            scale,
          }}
          whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          transition={{ duration: 0.3 }}
        />
      );
    };

    return (
      <motion.div 
        ref={ref}
        className="mb-16 relative overflow-hidden p-4 sm:p-6 md:p-8 rounded-lg bg-gradient-to-br from-black to-[#11111111]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Éléments décoratifs interactifs */}
        <Circle x={50} y={50} size={40} color="rgba(255, 255, 255, 0.2)" />
        <Circle x={150} y={100} size={60} color="rgba(255, 255, 255, 0.15)" />
        <Circle x={250} y={80} size={30} color="rgba(255, 255, 255, 0.1)" />
        <Circle x={80} y={200} size={50} color="rgba(255, 255, 255, 0.12)" />

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
            className="text-white text-sm sm:text-base mb-6"
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
            <Link href="/Contact" className="inline-flex items-center bg-white text-black px-6 py-3 text-base font-medium rounded-full hover:bg-gray-100 transition-colors">
              <span className="mr-2">Contactez-moi</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }