import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full max-w-screen-xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-medium mb-8 text-center">
        <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-3"></span>
        À propos
      </h2>
      
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <Image
          src="/images/odile-dewas.png"
          alt="Odile Dewas"
          width={60}
          height={60}
          className="rounded-full mb-4"
        />
        <p className="text-lg md:text-xl font-semibold text-center mb-6">
          Bonjour, je suis Odile Dewas, consultante freelance en systèmes SAP, spécialisée dans l&apos;optimisation et la gestion technique avancée des environnements SAP.
        </p>
        
        <div className="text-sm text-gray-400 space-y-4">
          <p>
            Bonjour ! Je suis Odile Dewas, consultante freelance spécialisée dans les systèmes SAP et l&apos;optimisation technique.
          </p>
          <p>
            Avec plus de 19 ans d&apos;expérience, je me consacre à la gestion avancée des environnements SAP pour offrir des solutions efficaces et sur mesure. Mon expertise couvre la surveillance, la maintenance, la sécurité et la formation des équipes sur les meilleures pratiques SAP.
          </p>
          <p>
            Collaborons pour optimiser vos systèmes SAP et atteindre vos objectifs opérationnels avec succès !
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;