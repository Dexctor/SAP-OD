'use client'
import React from 'react';
import Link from 'next/link';


const Footer = () => {
  const ref = React.useRef(null);


  return (
    <footer className="text-white" ref={ref}>
      <div className="container mx-auto px-4 py-12 sm:py-24">
        {/* Reste du contenu du footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center sm:items-start">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 sm:mb-0">Odiledewas@gmail.com</h3>
          
          {/* Liens utiles et Contact */}
          <div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p>Saint-Pierre-Brouck, France</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
              <div className="flex justify-center sm:justify-start space-x-4">
                {/* Ajoutez ici vos icônes de réseaux sociaux */}
                <a href="https://www.linkedin.com/in/odile-dewas-614ba326/?originalSubdomain=fr" className="hover:text-gray-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Odile Dewas. Tous droits réservés.</p>
          <p>Site Réalisé par <Link href='https://antoinedewas.fr' className='text-gray-400 hover:text-white'>Antoine Dewas</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;