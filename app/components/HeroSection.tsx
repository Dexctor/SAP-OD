'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PiHandWavingFill } from "react-icons/pi";

function Hero() {
  return (
    <div className="relative  text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col">
          <motion.div 
            className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mb-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <Image
                  src="/images/odile-dewas.png"
                  alt="Odile Dewas"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className='flex items-center gap-5'>
                <h1 className="text-base sm:text-lg font-semibold">ODILE DEWAS</h1>
                <PiHandWavingFill className='text-yellow-300 text-6xl' />
                </div>
                <div className="flex items-center mt-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="ml-2 text-xs sm:text-sm text-gray-400">Disponible pour du travail en free-lance</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="w-full"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
              Avec 18 ans d&apos;expérience en tant qu&apos;Architecte SAP Solution Manager et Administratrice SAP BASIS, je suis prête à relever de nouveaux challenges pour optimiser et sécuriser vos systèmes SAP.
            </h2>
          </motion.div>
          <motion.div
            className="w-full sm:w-2/3 md:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg text-gray-400 mb-8">
              Je suis prête à optimiser et sécuriser vos systèmes SAP. Découvrez comment mon expertise peut transformer votre entreprise.
            </p>
            <a
              href="./get-started"
              className="inline-block px-6 py-3 text-sm sm:text-base font-medium rounded-lg shadow-sm text-white bg-[#242424] border border-[#393939] hover:bg-purple-700 hover:border-[#cc24ff] transition-colors"
            >
             CONTACTEZ-MOI
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;