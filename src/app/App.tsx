import { useEffect } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { BlogCarousel } from '@/app/components/BlogCarousel';
import { PhilosophySection } from '@/app/components/PhilosophySection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { SkillsMarquee } from '@/app/components/SkillsMarquee';
import { CodingStatsSection } from '@/app/components/CodingStatsSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Grid background pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <BlogCarousel />
          <PhilosophySection />
          <ProjectsSection />
          <SkillsMarquee />
          <CodingStatsSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}