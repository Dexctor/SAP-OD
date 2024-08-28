'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="text-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link href='./'>
                            <h3 className="text-xl font-semibold">ODILE DEWAS - CONSULTING</h3>
                        </Link>
                    </motion.div>

                    {/* Menu pour desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button onClick={() => scrollToSection('travaux')} className="text-gray-300 hover:text-white transition-colors">Travaux</button>
                        <Link href='./links' className="text-gray-300 hover:text-white transition-colors">Liens</Link>
                        <motion.div
                            whileHover={{
                                backgroundColor: "#7D3C98",
                                transition: { duration: 0.3 }
                            }}
                            className="relative rounded-full overflow-hidden"
                        >
                            <Link href='/Contact' className="px-4 py-2 flex items-center justify-between bg-[#1d1d1d] text-white">
                                <span className="mr-2">CONTACTEZ-MOI</span>
                                <motion.div
                                    className="bg-[#9333ea] rounded-full p-1"
                                    whileHover={{
                                        rotate: -45,
                                        transition: { duration: 0.3 }
                                    }}
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
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menu pour mobile */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <button onClick={() => scrollToSection('travaux')} className="block text-gray-300 hover:text-white transition-colors py-2 w-full text-left">Travaux</button>
                            <Link href='./links' className="block text-gray-300 hover:text-white transition-colors py-2">Liens</Link>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href='/Contact' className="block text-center px-4 py-2 rounded-full  mt-4">
                                    CONTACTEZ-MOI
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}