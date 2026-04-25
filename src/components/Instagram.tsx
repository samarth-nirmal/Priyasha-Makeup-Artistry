import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram as InstagramIcon, X, Play } from 'lucide-react';

// Place your Instagram Reel embed codes inside the grid below

export default function Instagram() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <section className="bg-ivory section-padding overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="label-line">FOLLOW ALONG</div>
          <h2 className="mt-6 text-[42px] md:text-[48px] text-burgundy font-normal">
            Moments from the studio.
          </h2>
          <p className="mt-4 text-[14px] font-normal text-muted">
            @priyashakatariya_makeupartist on Instagram
          </p>
        </motion.div>

        {/* Instagram Reels Grid */}
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

          {/* Reel 1 */}
          <div onClick={() => setActiveVideo('/Priyasha-Makeup-Artistry/Assets/Reels/1.mp4')} className="w-full flex justify-center relative group cursor-pointer">
            <video
              src="/Priyasha-Makeup-Artistry/Assets/Reels/1.mp4#t=0.001"
              className="w-full max-w-[340px] aspect-[9/16] object-cover rounded-[1.5rem] shadow-lg border-2 border-champagne/20"
              muted playsInline preload="metadata"
            />
            <div className="absolute inset-0 max-w-[340px] mx-auto bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] flex flex-col items-center justify-center gap-3">
              <Play size={40} className="text-white fill-white shadow-sm" />
              <span className="text-white text-[14px] font-medium tracking-wide">Play Reel</span>
            </div>
          </div>

          {/* Reel 2 */}
          <div onClick={() => setActiveVideo('/Priyasha-Makeup-Artistry/Assets/Reels/2.mp4')} className="w-full flex justify-center relative group cursor-pointer">
            <video
              src="/Priyasha-Makeup-Artistry/Assets/Reels/2.mp4#t=0.001"
              className="w-full max-w-[340px] aspect-[9/16] object-cover rounded-[1.5rem] shadow-lg border-2 border-champagne/20"
              muted playsInline preload="metadata"
            />
            <div className="absolute inset-0 max-w-[340px] mx-auto bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] flex flex-col items-center justify-center gap-3">
              <Play size={40} className="text-white fill-white shadow-sm" />
              <span className="text-white text-[14px] font-medium tracking-wide">Play Reel</span>
            </div>
          </div>

          {/* Reel 3 */}
          <div onClick={() => setActiveVideo('/Priyasha-Makeup-Artistry/Assets/Reels/3.mp4')} className="w-full flex justify-center relative group cursor-pointer">
            <video
              src="/Priyasha-Makeup-Artistry/Assets/Reels/3.mp4#t=0.001"
              className="w-full max-w-[340px] aspect-[9/16] object-cover rounded-[1.5rem] shadow-lg border-2 border-champagne/20"
              muted playsInline preload="metadata"
            />
            <div className="absolute inset-0 max-w-[340px] mx-auto bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.5rem] flex flex-col items-center justify-center gap-3">
              <Play size={40} className="text-white fill-white shadow-sm" />
              <span className="text-white text-[14px] font-medium tracking-wide">Play Reel</span>
            </div>
          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="https://www.instagram.com/priyashakatariya_makeupartist/"
            target="_blank"
            rel="noreferrer"
            className="btn-gold px-8 py-3.5 text-[13px]"
          >
            Follow on Instagram →
          </a>
        </motion.div>

      </div>

      {/* Video Overlay Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-6 md:p-12"
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center w-auto h-auto max-h-[80svh] max-w-[90vw] rounded-xl overflow-hidden shadow-2xl bg-black/50"
            >
              <video
                src={activeVideo}
                controls
                autoPlay
                className="max-h-[80svh] w-auto max-w-[90vw] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
