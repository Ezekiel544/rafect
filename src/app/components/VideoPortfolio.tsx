import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, ExternalLink } from 'lucide-react';
import Videoone from './figma/pebone.mp4';
import Videotwo from './figma/pebtwo.mp4';
import Videothree from './figma/pebthree.mp4';
import Videofour from './figma/pebfour.mp4';
import Videofive from './figma/pebfive.mp4';
import Videosix from './figma/pebsix.mp4';
// Placeholder data for the 5 videos
const videos = [
  {
    id: 1,
    title: 'Surgence stream with Kevin Lee of Verse8',
    description: 'Full marketing campaign that drove 10K+ users in the first week',
    thumbnail: 'blockchain technology',
    category: 'Marketing',
    // This would be the actual video URL
    videoUrl: Videoone,
  },
  {
    id: 2,
    title: 'Motion design intro for Dabba Network',
    description: 'High-retention clips from a 2-hour AMA session',
    thumbnail: 'podcast recording studio',
    category: 'Clipping',
    videoUrl: Videotwo,
  },
  {
    id: 3,
    title: 'Clip of Galileo stream with Jake the founder of Thrust',
    description: 'Coordinated raid that generated 50K+ impressions',
    thumbnail: 'team collaboration',
    category: 'Raids',
    videoUrl: Videothree,
  },
  {
    id: 4,
    title: 'meduim onboarding class',
    description: 'Animated breakdown of complex DeFi mechanics',
    thumbnail: 'animation motion graphics',
    category: 'Motion Design',
    videoUrl: Videofour,
  },
  {
    id: 5,
    title: 'youtube automation , class4',
    description: 'Viral clips series that built credibility and reach',
    thumbnail: 'professional presentation',
    category: 'Content',
    videoUrl: Videofive,
  },
   {
    id: 6,
    title: 'Founder of Unfungible, speaking on building in the near market;',
    description: 'Viral clips series that built credibility and reach',
    thumbnail: 'professional presentation',
    category: 'Content',
    videoUrl: Videosix,
  },
];

function VideoCard({ video, index, isInView }: { video: typeof videos[0]; index: number; isInView: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const cardInView = useInView(cardRef, { amount: 0.5 });

  // Auto-play when card is in view
  useEffect(() => {
    if (cardInView && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play might be blocked by browser
        console.log('Auto-play blocked');
      });
      setIsPlaying(true);
    } else if (!cardInView && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [cardInView]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: -100, rotateY: -15 }}
      animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
      exit={{ opacity: 0, x: 100, rotateY: 15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHoveredIndex(true)}
      onHoverEnd={() => setHoveredIndex(false)}
      className="group relative"
    >
      <motion.div
        className="relative  rounded-2xl overflow-hidden border-2 border-gray-800"
        whileHover={{ 
          y: -10,
          borderColor: '#ffffff',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Video player */}
        <div className="relative aspect-video overflow-hidden ">
          {/* Actual video element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted={isMuted}
            playsInline
            poster={`https://source.unsplash.com/800x450/?${encodeURIComponent(video.thumbnail)}`}
          >
            {/* Replace this with actual video source when available */}
            <source src={video.videoUrl} type="video/mp4" />
          </video>

          <div className="absolute inset-0  to-transparent pointer-events-none" />

          {/* Video controls overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Play/Pause button */}
            <motion.button
              onClick={togglePlayPause}
              className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-6 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white fill-white" />
              ) : (
                <Play className="w-8 h-8 text-white fill-white" />
              )}
            </motion.button>

            {/* Mute/Unmute button */}
            <motion.button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm border-2 border-white rounded-full p-4 hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-white" />
              ) : (
                <Volume2 className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs px-3 py-1 rounded-full">
              {video.category}
            </span>
          </div>

          {/* Playing indicator */}
          {isPlaying && !hoveredIndex && (
            <motion.div
              className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-white text-xs">Playing</span>
            </motion.div>
          )}
        </div>

        {/* Video info */}
        <div className="p-6">
          <h3 className="text-white text-lg sm:text-xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
            {video.title}
          </h3>
          {/* <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
            {video.description}
          </p> */}

          {/* View button */}
          {/* <motion.button
            className="flex items-center gap-2 text-white text-sm font-semibold"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button> */}
        </div>

        {/* Animated glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{
            boxShadow: hoveredIndex 
              ? '0 0 50px rgba(255, 255, 255, 0.2)'
              : '0 0 0px rgba(255, 255, 255, 0)',
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export function VideoPortfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={ref} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gray-400 text-sm sm:text-base tracking-[0.3em] uppercase border border-gray-600 px-6 py-2 rounded-full">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
            A showcase of recent projects and campaigns
          </p>
        </motion.div>

        {/* Videos grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} isInView={isInView} />
          ))}

          {/* CTA Card - "Your Project Here" */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
            exit={{ opacity: 0, x: 100, rotateY: 15 }}
            transition={{ duration: 0.6, delay: videos.length * 0.1 }}
            className="group relative"
          >
           
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            { label: 'Raised for projects', value: '$10m+' },
            { label: 'Total Reach', value: '3M+' },
            { label: 'videos Created', value: '30+' },
            { label: 'Communities Built', value: '25+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            >
              <motion.div
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 text-sm sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}