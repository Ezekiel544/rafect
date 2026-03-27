import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 text-white">
            <span className="border-l-4 border-white pl-4">WHO IS RVFET?</span>
          </h2>
          <p className="text-xs md:text-sm text-white/60 mb-6 md:mb-8">Everything you need to know about me.</p>
          
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              I'm a <strong className="text-white">Senior Software Engineer</strong> and <strong className="text-white">Offensive Security Researcher</strong> from Baku, Azerbaijan.
            </p>
            
            <p>
              I hold <strong className="text-white">Bachelor's degree in Information Technologies (IT)</strong> and <strong className="text-white">Master's degree in Management Information Systems (MIS)</strong>.
            </p>
            
            <p>
              I currently have an active <strong className="text-white">IELTS CEFR-C1</strong> with a score of <strong className="text-white">7.5 (2025-2027)</strong>, and previously had a score of <strong className="text-white">7.0 (2023-2025)</strong>.
            </p>
            
            <p>
              With over <strong className="text-white">6+ years</strong> of hands-on experience, I acquired an extremely diverse skill set that spans <strong className="text-white">Full-Stack Development, Reverse engineering, Vulnerability Research, Cloud Infrastructure, Offensive Tooling Development, DevSecOps</strong>, and my main expertise – <strong className="text-white">Secure Software Development</strong>.
            </p>
            
            <p>
              My first job in the tech industry was as a graphic designer, where I designed logos, banners, and various marketing materials for local businesses. I realized I could learn stuff rather quickly on my own, so I tried web development next. After hitting the complexity ceiling of standard web development, I decided to focus on professions that are more challenging and impactful, switching to Software Engineering and Security Research.
            </p>
            
            <p>
              Over the years, while doing my Software Engineering job, I voluntarily secured millions of peoples <strong className="text-white">PII (Personally Identifiable Information)</strong> and corporate assets by finding and responsibly disclosing critical security vulnerabilities in popular software products used by millions worldwide. Most of my research findings are sensitive and I'm not allowed to disclose them publicly. Some of my public research can be found in the <a href="#blog" className="text-white underline hover:text-white/80">Write-ups</a> page.
            </p>
            
            <p>
              I'm a natural <strong className="text-white">multipotentialite</strong>. I love doing research and learning new things. I find complex problems exciting to solve, especially those deemed impossible or unconventional standards or that require a deep understanding of multiple domains.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}