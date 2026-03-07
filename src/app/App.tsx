import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '@/app/components/Navbar';
import { HeroSection } from '@/app/components/HeroSection';
import { AboutSection } from '@/app/components/AboutSection';
import { BlogCarousel } from '@/app/components/BlogCarousel';
import { VideoPortfolio } from "@/app/components/VideoPortfolio";
import { Services } from "@/app/components/services";
import { Preloader } from "@/app/components/preloader";
import { PhilosophySection } from '@/app/components/PhilosophySection';
import { ProjectsSection } from '@/app/components/ProjectsSection';
import { SkillsMarquee } from '@/app/components/SkillsMarquee';
import { CodingStatsSection } from '@/app/components/CodingStatsSection';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Preloader key="preloader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-black relative overflow-x-hidden"
        >
          {/* Grid background */}
          <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <Navbar />

            <main>
              <HeroSection />
              <AboutSection />
              <BlogCarousel />
              <Services />
              <VideoPortfolio />
              <PhilosophySection />
              <ProjectsSection />
              <SkillsMarquee />
              <CodingStatsSection />
            </main>

            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
