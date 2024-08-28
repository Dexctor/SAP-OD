import HeroSection from "./components/HeroSection";
import LogoSection from "./components/LogoSection";
import RecentProjects from "./components/RecentProjects";
import About from "./components/about";
import Works from "./components/Works"; 
import Skills from "./components/skills";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import IdeaProject from "./components/IdeaProject";

export default function Home() {
  return (
    <>
     <HeroSection/>
      
      
      <AnimatedSection animation={{ initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } }}>
        <LogoSection/>
      </AnimatedSection>
      
      <AnimatedSection animation={{ initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }}>
        <RecentProjects/>
      </AnimatedSection>
      
      <AnimatedSection animation={{ initial: { opacity: 0, x: 90 }, animate: { opacity: 1, rotateX: 0 }, transition: { duration: 0.8 } }}>
        <About/>
      </AnimatedSection>
      
      <AnimatedSection animation={{ initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 } }}>
        <Works/>
      </AnimatedSection>
      
      <AnimatedSection animation={{ initial: { opacity: 0, scale: 1.2 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 } }}>
        <Skills/>
      </AnimatedSection>

      <IdeaProject/>
    </>
  );
}