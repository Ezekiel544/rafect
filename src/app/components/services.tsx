import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Badge, Image, Bookmark } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import Firstimg from './figma/udemy.png';
import Secondimg from './figma/vcudemy.png';
import Thirdimg from './figma/royalraider.png';
const services = [
  {
    icon: Badge,
    title: 'Web3 Marketing Strategist',
    description: 'I design data-driven growth campaigns that help blockchain projects gain visibility, attract users, and scale faster.',
    imageUrl: Firstimg,
    linkUrl: '#',
  },
  {
    icon: Image,
    title: 'VC & Market Analysis',
    description: 'Breaking down trends, tokenomics, and opportunities to help projects and investors make smarter decisions.',
    imageUrl: Secondimg,
    linkUrl: '#',
  },
  {
    icon: Bookmark,
    title: 'Community Building',
    description: 'Leading Royal Raiders to drive organic engagement,community activity around your project.',
     imageUrl: Thirdimg,
      linkUrl: '#',
     
  },
    {
    icon: Badge,
    title: 'Web3 Marketing Strategist',
    description: 'I design data-driven growth campaigns that help blockchain projects gain visibility, attract users, and scale faster.',
    imageUrl: Firstimg,
    linkUrl: '#',
  },
  {
    icon: Image,
    title: 'VC & Market Analysis',
    description: 'Breaking down trends, tokenomics, and opportunities to help projects and investors make smarter decisions.',
    imageUrl: Secondimg,
    linkUrl: '#',
  },
  {
    icon: Bookmark,
    title: 'Community Building',
    description: 'Leading Royal Raiders to drive organic engagement,community activity around your project.',
     imageUrl: Thirdimg,
      linkUrl: '#',
     
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-400 text-sm sm:text-base tracking-[0.3em] uppercase border border-gray-600 px-6 py-2 rounded-full">
              What I Do
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turning Hype Into Real Growth
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            Specialized services designed to help Web3 projects succeed
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a href={`${(service.linkUrl)}`} target="_blank">
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <motion.div
                  className="relative bg-gray-900 border-2 border-gray-800 rounded-2xl overflow-hidden h-full"
                  whileHover={{ borderColor: '#ffffff' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                       <img
                        src={`${(service.imageUrl)}`}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      /> 
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                    </motion.div>
                    
                    {/* Icon overlay */}
                    <motion.div
                      className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Card content */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-white/0 rounded-2xl pointer-events-none"
                    whileHover={{
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 0 30px rgba(255, 255, 255, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              </a>
            );
          })}
        </div>

        {/* Additional features section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 sm:p-12">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">
              What Makes It Work
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Data-Driven Approach</h4>
                    <p className="text-gray-400 text-sm">
                      Every campaign is backed by market research, trend analysis, and clear metrics.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Authentic Narratives</h4>
                    <p className="text-gray-400 text-sm">
                      Stories that resonate with your audience and convert attention into action.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Community First</h4>
                    <p className="text-gray-400 text-sm">
                      Building engaged communities that stick around for the long term.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Scalable Results</h4>
                    <p className="text-gray-400 text-sm">
                      Systems and strategies designed to grow with your project.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}