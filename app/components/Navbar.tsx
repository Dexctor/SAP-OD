'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

const buttonVariants = {
  initial: { backgroundColor: "#1d1d1d", paddingRight: "16px" },
  hover: { 
    backgroundColor: "#7D3C98", 
    paddingRight: "40px",
    transition: { duration: 0.3 }
  }
};

const arrowVariants = {
  initial: { opacity: 0, x: -10 },
  hover: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNavigation = (sectionId: string) => {
        if (pathname === '/links') {
            router.push(`/#${sectionId}`);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="text-white ">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href='./' className="text-xl font-semibold hover:text-[#e9e9e9] transition-colors">
                            ODILE DEWAS - CONSULTING
                        </Link>
                    </motion.div>

                    {/* Menu pour desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button onClick={() => handleNavigation('travaux')} className="text-gray-300 hover:text-white transition-colors">Travaux</button>
                        <Link href='./links' className="text-gray-300 hover:text-white transition-colors">Liens</Link>
                        <motion.div
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            className="relative rounded-full overflow-hidden"
                        >
                            <Link href='/Contact' className="px-4 py-2 flex items-center justify-between text-white">
                                <span>CONTACTEZ-MOI</span>
                                <motion.div
                                    variants={arrowVariants}
                                    className="absolute right-4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Bouton hamburger pour mobile */}
                    <motion.button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none"
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </motion.button>
                </div>

                {/* Menu pour mobile */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="md:hidden fixed inset-0  bg-opacity-50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <motion.div 
                                className="bg-[#1d1d1d] h-full w-2/3 max-w-xs"
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="px-4 py-6 space-y-4">
                                    <button onClick={() => handleNavigation('travaux')} className="block text-gray-300 hover:text-white transition-colors py-2 w-full text-left">Travaux</button>
                                    <Link href='./links' className="block text-gray-300 hover:text-white transition-colors py-2">Liens</Link>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href='/Contact' className="block text-center px-4 py-2 rounded-full bg-[#9333ea] mt-4 hover:bg-[#7D3C98] transition-colors">
                                            CONTACTEZ-MOI
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}