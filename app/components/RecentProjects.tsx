'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectDetailProps {
  title: string;
  items: string[];
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ title, items }) => (
  <div className='my-5'>
    <p className="text-[#aeb2ba] font-bold mb-2">{title}</p>
    <ul className="space-y-2 mb-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="bg-gray-500 w-1 h-1 rounded-full mt-2 mr-3 flex-shrink-0"></div>
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface ProjectInfoProps {
  label: string;
  value: string;
  isLink?: boolean;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ label, value, isLink = false }) => (
  <div className="flex justify-between border-b border-[#2b2d2d] pb-5">
    <p className="text-gray-400">{label}</p>
    {isLink ? (
      <motion.a 
        href={value} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 px-3 py-1 rounded-full"
        whileHover={{ 
          backgroundColor: "#2b2d2d", 
          color: "#ffffff",
          scale: 1.05
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        -&gt;
      </motion.a>
    ) : (
      <p className="text-white">{value}</p>
    )}
  </div>
);

const RecentProjects: React.FC = () => {
  const projectDetails: ProjectDetailProps[] = [
    {
      title: "Gestion des systèmes SAP:",
      items: [
        "Surveillance et maintenance des systèmes SAP.",
        "Mise en place des meilleures pratiques pour la gestion et la résolution des problèmes techniques."
      ]
    },
    {
      title: "Expertise en Solution Manager:",
      items: [
        "Implémentation et configuration des outils de gestion de changement et de gestion des incidents.",
        "Utilisation et optimisation des outils Focused Build pour le développement agile et la gestion des projets SAP.",
        "Surveillance des systèmes via les outils de monitoring."
      ]
    },
    {
      title: "Support technique et formation:",
      items: [
        "Support technique avancé aux utilisateurs finaux.",
        "Formation des équipes internes sur les processus de résolution des problèmes et les meilleures pratiques de gestion SAP."
      ]
    },
    {
      title: "Gestion des bases de données:",
      items: [
        "Administration, surveillance des performances et optimisation des requêtes des bases de données SAP.",
        "Migration et mise à jour des bases de données."
      ]
    },
    {
      title: "Gestion des autorisations et sécurité:",
      items: [
        "Gestion des autorisations des utilisateurs et mise en place de procédures de sécurité strictes.",
        "Suivi des mesures de conformité pour garantir que les systèmes respectent les réglementations et standards de sécurité."
      ]
    }
  ];

  const projectInfo: ProjectInfoProps[] = [
    { label: "Role", value: "Expert Basis" },
    { label: "Services fournis", value: "Gestion des Systèmes SAP" },
    { label: "Entreprise", value: "Decathlon" },
    { label: "Visiter le Site", value: "https://digital.decathlon.net", isLink: true }
  ];

  return (
    <section id='travaux'>
    <div className="py-12 sm:py-16 md:py-24 px-4 sm:px-5 max-w-[1200px] mx-auto">
      <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-12 md:mb-16">
        <div className="bg-[rgb(44,255,191)] w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full"></div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white">Projets récents</h2>
      </div>

      <div className="space-y-8 w-full sm:w-11/12 md:w-4/5 mx-auto">
        <div className="w-full sm:w-4/5 md:w-3/5 mx-auto">
          <div className="inline-block px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs sm:text-sm font-normal text-white bg-[#1d1d1d] border border-[#2b2d2d] rounded-full my-6 sm:my-9">
            <p className="text-xs sm:text-sm font-medium text-white">2023</p>
          </div>

          <h3 className="text-xl sm:text-2xl font-medium text-white mb-6 sm:mb-8">
            Expert Solution Manager / Expert Basis
          </h3>

          <div className="w-full aspect-w-16 aspect-h-3 mb-6 sm:mb-8">
            <Image
              src="/images/logos/decathlon-project.png"
              alt="Project Image"
              width={700}
              height={80}
              objectFit="cover"
              className="rounded"
            />
          </div>

          <p className="text-[#aeb2ba] text-sm sm:text-base my-6 sm:my-8">
            En tant qu&apos;Expert Basis en mission chez Décathlon Croix via ma propre entreprise (SASU Odile Dewas), j&apos;offre une expertise technique avancée en gestion des systèmes SAP, notamment pour les modules Basis et Solution Manager. Mes responsabilités incluent :
          </p>

          <div className=''>
            {projectDetails.map((detail, index) => (
              <ProjectDetail key={index} {...detail} />
            ))}
          </div>

          <div className="space-y-4 mt-6 sm:mt-8 pt-4">
            {projectInfo.map((info, index) => (
              <ProjectInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default RecentProjects;