import { motion } from 'motion/react';
import { Shield, Zap, Gauge, Database, TrendingUp, Box } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: 'Zero Trust Security',
    description: 'Assumptions are the mother of all mistakes. I design systems that verify everything, trust nothing, and minimize attack surfaces.'
  },
  {
    icon: Zap,
    title: 'Complexity Reduction',
    description: 'Complexity is where vulnerabilities hide. I fight close to keep systems auditable, maintainable, and inherently secure.'
  },
  {
    icon: Gauge,
    title: 'Automation First',
    description: 'I hate doing error-prone, repetitive tasks to ensure consistency, reduce mistakes, and free up time for creative problem-solving.'
  },
  {
    icon: Database,
    title: 'Evidence-Based Decisions',
    description: 'Intuition is exploitable. I trust logs, metrics, and Proof-of-Concepts (PoCs) over gut feelings to guide my architectural and security choices.'
  },
  {
    icon: Gauge,
    title: 'Performance is not Optional',
    description: 'Whether I design for millions of users or a niche audience, I prioritize speed and efficiency to deliver seamless experiences.'
  },
  {
    icon: Box,
    title: 'Modular Architecture',
    description: 'Monoliths get messy. I build systems with interchangeable components to enhance flexibility, scalability and ease of maintenance.'
  }
];

export function PhilosophySection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white">
            <span className="border-l-4 border-white pl-4">PHILOSOPHY BEHIND MY WORK</span>
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-8 md:mb-12">
            Principles that guide my approach to security research and software engineering.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-black/40 border border-white/10 p-8 hover:border-white/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <principle.icon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl text-white mb-3">{principle.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}