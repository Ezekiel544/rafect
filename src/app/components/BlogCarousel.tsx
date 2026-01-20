import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    emoji: '🔒',
    title: 'Unauthenticated Infrastructure Abuse in Google Image Proxy',
    category: 'Affected Company: Google',
    description: 'How a logic flaw in Google\'s internal proxy service allowed for unauthenticated, attribution-free...',
    link: '#'
  },
  {
    id: 2,
    title: 'CVSS 6.5 Persistent State Corruption in Linear.app',
    category: 'Affected Company: Linear.app',
    description: 'Analyzing a logic vulnerability in Linear\'s optimistic UI architecture that allowed authenticated users to...',
    link: '#'
  },
  {
    id: 3,
    emoji: '🔓',
    title: 'CVSS 9.6 Account Takeover in Azerbaijan\'s Most Visited Platforms',
    category: 'Affected Company: Baku Service Platforms',
    description: 'How an OAuth token bypass through Open Redirect enabled complete account takeover on...',
    link: '#'
  }
];

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 50); // 5 seconds total (100 * 50ms)

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % blogs.length);
        setProgress(0);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <section id="blog" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white">
            <span className="border-l-4 border-white pl-4">BLOGS & RESEARCH ARTICLES & WRITE-UPS</span>
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-8 md:mb-12">
            I publish detailed write-ups on my latest security research findings after full remediation & responsible disclosure.
          </p>
          
          {/* Carousel Container */}
          <div className="relative min-h-[500px] md:h-96 lg:h-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-full">
                  {blogs.map((blog, idx) => {
                    const displayIndex = (currentIndex + idx) % blogs.length;
                    const displayBlog = blogs[displayIndex];
                    
                    return (
                      <div
                        key={displayBlog.id}
                        className="bg-black/40 border border-white/10 p-6 md:p-8 flex flex-col justify-between hover:border-white/30 transition-colors group"
                      >
                        <div>
                          {displayBlog.emoji && (
                            <div className="text-3xl md:text-4xl mb-4">{displayBlog.emoji}</div>
                          )}
                          <h3 className="text-lg md:text-xl text-white mb-3 md:mb-4 leading-tight">
                            {displayBlog.title}
                          </h3>
                          <p className="text-xs md:text-sm text-orange-400 mb-2 md:mb-3">{displayBlog.category}</p>
                          <p className="text-white/60 text-xs md:text-sm mb-4 md:mb-6">{displayBlog.description}</p>
                        </div>
                        <a 
                          href={displayBlog.link}
                          className="text-white flex items-center gap-2 group-hover:gap-3 transition-all text-sm"
                        >
                          <span>Full Article</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center gap-4 mt-8">
            {blogs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setProgress(0);
                }}
                className="relative"
              >
                <div className="w-16 h-1 bg-white/20">
                  {idx === currentIndex && (
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.05 }}
                    />
                  )}
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs">
                  {idx + 1}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}