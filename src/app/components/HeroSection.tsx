import { motion } from 'motion/react';
 import globeImage from './figma/image.png';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-8xl tracking-tight">
                <span className="text-white">RAFET</span>
                <br />
                <span className="text-white" style={{ 
                  WebkitTextStroke: '1.5px white',
                  WebkitTextFillColor: 'transparent'
                }}>
                  ABBASLI
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-xl">⚔️</span>
                <span>Offensive Security Researcher</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-xl">&</span>
                <span></span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-xl">⚙️</span>
                <span>Senior Software Engineer</span>
              </div>
            </motion.div>
            
            <motion.button
              className="mt-8 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-sm">📄</span>
              <span>View my Resume</span>
            </motion.button>
          </div>
          
          {/* 3D Globe - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="relative"
                animate={{ 
                  rotateY: [0, 360]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ 
                  transformStyle: 'preserve-3d'
                }}
              >
                <img 
                  src={globeImage} 
                  alt="3D Globe" 
                  className="w-full h-auto"
                />
              </motion.div>
              
              {/* Circular text overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.svg 
                  viewBox="0 0 200 200" 
                  className="w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="fill-white/40 text-[8px] tracking-widest uppercase" style={{ fontFamily: 'monospace' }}>
                    <textPath href="#circlePath" startOffset="0%">
                      LANDING OF OFFENSE — OFFENSIVE SECURITY RESEARCH — LANDING OF OFFENSE — 
                    </textPath>
                  </text>
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}