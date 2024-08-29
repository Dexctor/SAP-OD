'use client'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'
import Isap from '../../public/images/logos/isap.png'
import React from 'react'

const ProfileCard = () => {
  const links = [
    { 
      name: 'Linkedin', 
      icon: FaLinkedin, 
      link: 'https://www.linkedin.com/in/votre-profil', 
      isImage: false 
    },
    { 
      name: 'ISAP', 
      icon: Isap, 
      link: 'https://www.isap.com', 
      isImage: true 
    }
  ];

  return (
    <motion.div 
      className="text-white p-8 rounded-lg max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-6">
        <Image
          src="/images/odile-dewas.png"
          alt="Odile Dewas"
          width={100}
          height={100}
          className="rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold">Odile Dewas</h2>
        <p className="text-green-400 flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
          Available for freelance work
        </p>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold">
          <Link href="/Contact">Contactez-moi</Link>
        </button>
      </div>

      <h3 className="text-center mb-4">Trouver moi sur</h3>

      <div className="space-y-3 ">
        {links.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#11111111] p-3 rounded-lg flex items-center space-x-3 border border-[#3d3d3d]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              {item.isImage ? (
                <Image src={item.icon as StaticImageData} alt={item.name} width={20} height={20} />
              ) : (
                React.createElement(item.icon as React.ElementType, { className: "w-5 h-5" })
              )}
            </div>
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-400">
                {index === 0 && "Architecte SAP Solution Manager"}
                {index === 1 && "Architecte logiciel,Chef de projet"}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}

export default ProfileCard
