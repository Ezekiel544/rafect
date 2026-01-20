import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Bike, Smartphone, Database, Wrench } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: '01',
    icon: Bike,
    title: 'ADVANCED WAF EVASION & ANTI-FINGERPRINTING',
    description: 'Reverse engineering Cloudflare Turnstile, Google reCaptcha (v2/v3/invisible), and DDoS-Guard to automate data collection in hostile environments.',
    expanded: 'Developed sophisticated techniques to bypass modern Web Application Firewalls and anti-bot systems. This project involved reverse engineering multiple protection mechanisms including Cloudflare Turnstile, Google reCaptcha variants, and DDoS-Guard. The solution enables automated data collection while maintaining stealth and avoiding detection in heavily protected environments.'
  },
  {
    id: 2,
    number: '02',
    icon: Smartphone,
    title: 'AUTOMATED MOBILE MALWARE DETECTION PIPELINE',
    description: 'A high-concurrency watchdog for monitoring unauthorized application distribution across unregulated third-party stores.',
    expanded: 'Built a scalable pipeline for detecting and analyzing mobile malware across various app stores. The system monitors unauthorized application distribution, performs static and dynamic analysis, and identifies potential security threats in real-time. Designed for high concurrency to handle thousands of applications simultaneously.'
  },
  {
    id: 3,
    number: '03',
    icon: Database,
    title: 'THREAT INTELLIGENCE INGESTION INFRASTRUCTURE',
    description: 'Processing terabytes of unstructured data from leak sites and dark web forums into structured, queryable intelligence.',
    expanded: 'Engineered a robust infrastructure for processing and analyzing threat intelligence data at scale. The system ingests unstructured data from various sources including leak sites and dark web forums, then transforms it into structured, searchable intelligence. Handles terabytes of data with advanced parsing, deduplication, and correlation capabilities.'
  },
  {
    id: 4,
    number: '04',
    icon: Wrench,
    title: 'SECURE INFRASTRUCTURE TOOLING (GOLANG)',
    description: 'Developing secure, self-hosted alternatives for sensitive internal operations using Go.',
    expanded: 'Created a suite of security-focused tools and infrastructure components using Golang. These self-hosted solutions provide secure alternatives for sensitive internal operations, emphasizing privacy, security, and control. The tooling includes custom authentication systems, encrypted communication channels, and secure data storage mechanisms.'
  }
];

export function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white">
            <span className="border-l-4 border-white pl-4">STUFF I'VE BUILT & RESEARCHED</span>
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-8 md:mb-12">
            Security research, infrastructure engineering, and the occasional rabbit hole.
          </p>
          
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-black/40 border border-white/10 overflow-hidden hover:border-white/30 transition-colors"
              >
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full p-6 md:p-8 flex items-start gap-4 text-left"
                >
                  <project.icon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-white/40 text-sm">{project.number}</span>
                          <span className="text-white/40 text-sm">//</span>
                          <h3 className="text-lg md:text-xl text-white">{project.title}</h3>
                        </div>
                        <p className="text-white/60 text-sm">{project.description}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === project.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pl-16 md:pl-20">
                        <div className="border-l-2 border-white/20 pl-6">
                          <p className="text-white/70 text-sm leading-relaxed">
                            {project.expanded}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}