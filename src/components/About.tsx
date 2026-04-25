import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-cream section-padding overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-square relative overflow-hidden bg-champagne/20">
            <img
              src="/Priyasha-Makeup-Artistry/Assets/Priyasha.jpg"
              alt="Priyasha Katariya - Professional Makeup Artist"
              className="w-full h-full object-cover object-top"
            />
            {/* Inset Gold Frame */}
            <div className="absolute inset-4 border border-gold pointer-events-none z-10" />

            {/* Floating Tag */}
            <div className="absolute top-4 right-4 bg-burgundy text-white text-[10px] font-medium px-3.5 py-1.5 z-20 uppercase tracking-widest">
              Est. 2018
            </div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative flex flex-col"
        >
          <div className="label-line">THE ARTIST</div>

          <h2 className="mt-8 text-4xl md:text-[48px] text-burgundy leading-[1.2] font-normal italic">
            Crafting timeless beauty, across every canvas.
          </h2>

          <div className="mt-8 flex flex-col gap-6">
            <p className="text-[16px] font-light text-muted leading-[1.8]">
              I'm Priyasha Katariya — a Pune-based professional makeup artist with over 4 years of experience transforming individuals for their most significant moments. My work blends classical aesthetics with modern artistry, creating looks that feel both timeless and deeply personal.
            </p>
            <p className="text-[16px] font-light text-muted leading-[1.8]">
              Every client I work with gets my full attention from the first consultation to the final shot on set. I believe makeup should enhance, never mask — and that everyone deserves to feel completely themselves, only more radiant.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <div className="border border-champagne/40 rounded-full px-[18px] py-2 text-[11px] uppercase tracking-wider text-charcoal bg-white">
              MAC Certified Artist
            </div>
            <div className="border border-champagne/40 rounded-full px-[18px] py-2 text-[11px] uppercase tracking-wider text-charcoal bg-white">
              Internationally Trained
            </div>
          </div>

          {/* Signature Watermark */}
          <div className="absolute -bottom-10 right-0 z-0 opacity-20 pointer-events-none">
            <span className="font-display font-light italic text-[64px] md:text-[96px] text-champagne select-none">
              Priyasha
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
