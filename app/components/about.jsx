import Image from 'next/image';

const About = () => {
  return (
    <div className=" text-white pt-32 pb-36 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-medium mb-8 flex items-center">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
          À propos
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex items-start">
            <Image
              src="/images/odile-dewas.png"
              alt="Odile Dewas"
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
            <p className="text-xl font-semibold">
              Bonjour, je suis Odile Dewas, consultante freelance en systèmes SAP, spécialisée dans l&apos;optimisation et la gestion technique avancée des environnements SAP.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <p className="text-gray-400 mb-4 text-sm">
              Bonjour ! Je suis Odile Dewas, consultante freelance spécialisée dans les systèmes SAP et l&apos;optimisation technique.
            </p>
            <p className="text-gray-400 mb-4 text-sm">
              Avec plus de 19 ans d&apos;expérience, je me consacre à la gestion avancée des environnements SAP pour offrir des solutions efficaces et sur mesure. Mon expertise couvre la surveillance, la maintenance, la sécurité et la formation des équipes sur les meilleures pratiques SAP.
            </p>
            <p className="text-gray-400 text-sm">
              Collaborons pour optimiser vos systèmes SAP et atteindre vos objectifs opérationnels avec succès !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;