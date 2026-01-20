import { motion } from 'motion/react';

const skillCategories = [
  {
    title: 'ENGINEERING',
    skills: ['AGILE', 'GITHUB ACTIONS', 'SECURE SDLC', 'DISTRIBUTED SYSTEMS ARCHITECTURE']
  },
  {
    title: 'SECURITY',
    skills: ['IED ANTI-BOT EVASION', 'BURP SUITE', 'FRIDA', 'REVERSE ENGINEERING', 'SROW']
  },
  {
    title: 'TOOLS',
    skills: ['ADMB', 'SVG ANIMATION', 'ARCH LINUX', 'HYPERLAND', 'ZSH + STARSHIP', 'AI']
  }
];

export function SkillsMarquee() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white">
            <span className="border-l-4 border-white pl-4">SUMMARY OF MY TECHNICAL SKILLS</span>
          </h2>
          <p className="text-xs md:text-sm text-white/60">
            A quick overview of the tools, technologies, and methodologies I employ regularly.
          </p>
        </motion.div>
      </div>
      
      <div className="space-y-8">
        {skillCategories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="relative">
            <div className="mb-4 px-6">
              <h3 className="text-white/60 text-sm tracking-wider">{category.title}</h3>
            </div>
            
            {/* Marquee container */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6 whitespace-nowrap"
                animate={{
                  x: categoryIdx % 2 === 0 ? ['0%', '-50%'] : ['-50%', '0%']
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {/* Duplicate the skills array for seamless loop */}
                {[...category.skills, ...category.skills].map((skill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 border border-white/10"
                  >
                    <span className="text-white">{skill}</span>
                    <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}