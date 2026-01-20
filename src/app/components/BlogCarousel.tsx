import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Number of visible cards — you can make this dynamic later if needed
  const visibleCount = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1;

  useEffect(() => {
    const DURATION = 5000; // 5 seconds
    const INTERVAL_MS = 40;
    const STEP = (100 / DURATION) * INTERVAL_MS;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + STEP;
        if (next >= 100) {
          setCurrentIndex((prevIdx) => (prevIdx + 1) % blogs.length);
          return 0;
        }
        return next;
      });
    }, INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  // How many cards we actually render in the current view
  const cardsToShow = Math.min(visibleCount, blogs.length);

  return (
    <section
      id="blog"
      className="min-h-scree flex items-center justify-center px-4 md:px-6 "
    >
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
          <div className="relative relative 
  min-h-[280px]      /* smaller base height for mobile */
  sm:min-h-[320px] 
  md:min-h-[380px] 
  lg:min-h-[340px] 
  overflow-hidden overflow-hidden ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex h-full"
              >
                {Array.from({ length: cardsToShow }).map((_, offset) => {
                  const displayIndex = (currentIndex + offset) % blogs.length;
                  const blog = blogs[displayIndex];

                  return (
                    <div
                      key={`${blog.id}-${offset}`}
                      className={`
                        flex-shrink-0 
                        ${cardsToShow === 1 
                          ? 'w-full px-2' 
                          : 'w-1/3 px-3 md:px-4 lg:px-6'}
                      `}
                    >
                      <div
                        className="
                          bg-black/40 border border-white/10 
                          p-6 md:p-7 lg:p-8 
                          flex flex-col justify-between 
                          hover:border-white/30 
                          transition-colors group 
                          h-full rounded-xl
                        "
                      >
                        <div>
                          {blog.emoji && (
                            <div className="text-3xl md:text-4xl mb-4">{blog.emoji}</div>
                          )}
                          <h3 className="text-base md:text-lg lg:text-xl text-white mb-3 leading-tight font-medium">
                            {blog.title}
                          </h3>
                          <p className="text-xs md:text-sm text-orange-400 mb-2 md:mb-3">
                            {blog.category}
                          </p>
                          <p className="text-white/70 text-xs md:text-sm line-clamp-3 md:line-clamp-none mb-5">
                            {blog.description}
                          </p>
                        </div>
                        <a
                          href={blog.link}
                          className="text-white flex items-center gap-2 group-hover:gap-3 transition-all text-sm mt-auto"
                        >
                          <span>Read full article</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })}
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
                className="relative group"
              >
                <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white"
                    animate={{ width: idx === currentIndex ? `${progress}%` : 0 }}
                    transition={{ duration: 0.1, ease: 'linear' }}
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs group-hover:text-white transition-colors">
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