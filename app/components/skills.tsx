import React from 'react';

const skills = [
  "SAP HANA",
  "SAP BC (Basis Component)",
  "SAP Solution Manager",
  "SAP ECC",
  "Gestion des bases de données",
  "Gestion des bases de données (DB2, Oracle)",
  "Mises à niveau et migrations système"
];

const Skills: React.FC = () => {
    return (
      <div className="bg-[#11111111] border border-[#1d1d1d] text-white py-12 sm:py-24 px-4 rounded-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-4xl sm:text-5xl font-medium mb-6 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Compétences
            </h2>
            <p className="text-gray-400 mb-8">
              De la gestion des systèmes SAP à l&apos;optimisation des bases de
              données, chaque compétence contribue à l&apos;ensemble de mon
              expertise professionnelle. Grâce à des années d&apos;expérience et de
              formation continue, je suis en mesure d&apos;offrir des solutions
              innovantes et efficaces pour répondre aux besoins complexes de
              mes clients.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap content-start md:content-center gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-[#1d1d1d] border border-[#2b2d2d] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Skills;