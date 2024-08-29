'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function IdeaProject() {
    const [ref, isInView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    return (
      <motion.div 
        ref={ref}
        className="mb-16 relative overflow-hidden p-4 sm:p-6 md:p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        {/* Contenu CTA */}
        <div className="relative z-10 p-12">
          <motion.h2 
            className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Vous avez un projet en tête ?
          </motion.h2>
          <motion.p 
            className="text-white text-sm sm:text-base mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Vous ayez besoin d&apos;améliorer vos systèmes SAP existants ou de mettre en œuvre de nouvelles solutions ? Je suis là pour vous aider à concrétiser vos projets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link href="/Contact" className="inline-flex items-center bg-[#3a7dc0] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full hover:bg-gray-200 transition-colors">
              <span className="mr-2">Contactez-moi</span>
              {/* Icône ici si nécessaire */}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    );
  }