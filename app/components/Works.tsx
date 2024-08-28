'use client'
import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  poste: string;
  entreprise: string;
  periode: string;
}

const experiences: Experience[] = [
  { poste: "Architecte SAP Solution Manager", entreprise: "ArcelorMittal", periode: "2016 - 2023" },
  { poste: "Chef de projet technique Solman", entreprise: "ArcelorMittal", periode: "2015 - 2016" },
  { poste: "Administratrice SAP BC Confirmée", entreprise: "oXya", periode: "2011 - 2015" },
  { poste: "Administratrice SAP BC", entreprise: "ArcelorMittal", periode: "2006 - 2011" },
  { poste: "Analyste programmeur", entreprise: "ArcelorMittal", periode: "2005 - 2006" },
];

const ExperienceProfessionnelle: React.FC = () => {
    return (
      <div className="text-white pb-24 sm:py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-10 sm:mb-16 md:mb-20 flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
            Expérience professionnelle
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-800 pb-4"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                <div className="mb-2 sm:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold">{exp.poste}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <motion.span
                    className="bg-[#1d1d1d] border border-[#2b2d2d] text-gray-300 px-3 py-1 rounded-full text-sm"
                    whileHover={{ backgroundColor: "#2b2d2d", color: "#ffffff" }}
                  >
                    {exp.entreprise}
                  </motion.span>
                  <motion.span
                    className="bg-[#1d1d1d] border border-[#2b2d2d] text-gray-300 px-3 py-1 rounded-full text-sm"
                    whileHover={{ backgroundColor: "#2b2d2d", color: "#ffffff" }}
                  >
                    {exp.periode}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default ExperienceProfessionnelle;