import { useState, useEffect } from 'react';
import { Lightbulb, Moon } from 'lucide-react';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-white flex items-center justify-center">
              <span className="text-white text-[10px] md:text-xs">R</span>
            </div>
            <span className="text-white text-sm md:text-base tracking-wider">RVFET.COM</span>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors text-sm md:text-base">
              Home
            </a>
            <a href="#blog" className="text-white hover:text-gray-300 transition-colors text-sm md:text-base">
              Blog
            </a>
            
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                <Lightbulb className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                <Moon className="w-3 h-3 md:w-4 md:h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}