import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A0608] pt-20 pb-10 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24"
      >
        {/* Col 1: Brand */}
        <div className="flex flex-col">
          <div className="font-display text-[22px] text-champagne">Priyasha Katariya</div>
          <div className="mt-2 text-[13px] font-light text-champagne/50">Professional Makeup Artist, Pune.</div>
          <div className="mt-6 w-10 h-px bg-gold" />
          <p className="mt-6 text-[13px] font-light text-champagne/50 leading-[1.8] max-w-[280px]">
            Serving clients across Mumbai, Pune, Delhi, and destination projects across India.
          </p>
        </div>

        {/* Col 2: Navigate */}
        <div className="flex flex-col">
          <h4 className="text-[11px] uppercase tracking-widest text-gold font-medium">Navigate</h4>
          <ul className="mt-8 flex flex-col gap-4">
            {['Work', 'About', 'Services', 'Testimonials', 'Book a Consultation'].map((link) => (
              <li key={link}>
                <a href={link === 'Book a Consultation' ? '#contact' : `#${link.toLowerCase()}`} className="text-[13px] font-light text-champagne/60 hover:text-champagne transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="flex flex-col">
          <h4 className="text-[11px] uppercase tracking-widest text-gold font-medium">Contact</h4>
          <ul className="mt-8 flex flex-col gap-4">
            <li className="text-[13px] font-light text-champagne/60">+91 98765 43210</li>
            <li className="text-[13px] font-light text-champagne/60">hello@Priyasha.in</li>
            <li className="text-[13px] font-light text-champagne/60">@Priyashatariya_makeupartist</li>
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <div className="text-[12px] font-light text-champagne/40">
          © {currentYear} Priyasha Katariya. All rights reserved.
        </div>
        <div className="text-[12px] font-light italic text-champagne/30">
          Designed with intention.
        </div>
      </motion.div>
    </footer>
  );
}
