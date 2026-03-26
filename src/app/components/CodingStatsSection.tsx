import { motion } from 'motion/react';

const codingStats = [
  { language: 'Python', time: '918 hrs 35 mins', percentage: '55.4%', color: '#3776AB' },
  { language: 'Go', time: '692 hrs 51 mins', percentage: '41.7%', color: '#00ADD8' },
  { language: 'Other', time: '487 hrs 16 mins', percentage: '5.6%', color: '#6B7280' },
  { language: 'Astro', time: '164 hrs 30 mins', percentage: '6.4%', color: '#FF5D01' },
  { language: 'JavaScript', time: '61 hrs 12 mins', percentage: '3.7%', color: '#F7DF1E' },
  { language: 'YAML', time: '56 hrs 31 mins', percentage: '3.4%', color: '#CB171E' },
  { language: 'Markdown', time: '45 hrs 18 mins', percentage: '2.8%', color: '#083FA1' },
  { language: 'JSON', time: '31 hrs 32 mins', percentage: '1.9%', color: '#292929' },
  { language: 'HTML', time: '28 hrs 15 mins', percentage: '1.7%', color: '#E34F26' },
  { language: 'Bash', time: '11 hrs 38 mins', percentage: '1.4%', color: '#4EAA25' }
];

export function CodingStatsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 text-white text-center">
            <span className="border-l-4 border-white pl-4 inline-block">
              CODED FOR <span className="inline-block px-3 md:px-4 py-1 border border-white mx-2">1642 HOURS & 38 MINUTES</span> THIS YEAR
            </span>
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-8 md:mb-12 text-center">
            I'm a polyglot developer. Here's a breakdown of the top programming languages I've used this year.
          </p>
          
          <div className="bg-black/40 border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-px bg-white/10">
              <div className="bg-black p-4">
                <span className="text-white/60 text-sm">Language</span>
              </div>
              <div className="bg-black p-4 text-center">
                <span className="text-white/60 text-sm">Time spent</span>
              </div>
              <div className="bg-black p-4 text-right">
                <span className="text-white/60 text-sm">Percentage</span>
              </div>
            </div>
            
            {codingStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="grid grid-cols-3 gap-px bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="bg-black p-4 flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: stat.color }}
                  />
                  <span className="text-white">{stat.language}</span>
                </div>
                <div className="bg-black p-4 text-center">
                  <span className="text-white/80">{stat.time}</span>
                </div>
                <div className="bg-black p-4 text-right">
                  <span className="text-white/80">{stat.percentage}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-white/60 text-center mt-8 text-sm">
            64 languages in total
          </p>
        </motion.div>
      </div>
    </section>
  );
}