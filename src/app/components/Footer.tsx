import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <p className="text-white/60 text-sm">
            © 2026 RVFET. All rights reserved.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 text-white/60 text-sm">
            <span>Built using</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>Astro</span>
            </span>
            <span>styled using</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span>Tailwind</span>
            </span>
            <span>and</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Basecoat</span>
            </span>
            <span>Hosted by</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full" />
              <span>Cloudflare</span>
            </span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm">
              Analytics
            </a>
            <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm">
              Status
            </a>
            <a href="#" className="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors text-white text-sm">
              Source Code
            </a>
          </div>
          
          <p className="text-white/40 text-xs">
            Last build: Jan 20 06:37 UTC BLZ#:991
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
