import { motion } from 'motion/react';

const items = [
  'Bridal Makeup',
  'Engagement Looks',
  'Mehendi Artistry',
  'Reception Glam',
  'Pre-Wedding Shoots',
  'Trial Sessions',
];

export default function Marquee() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-burgundy h-[48px] overflow-hidden flex items-center border-y border-burgundy"
    >
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center">
                <span className="text-gold mx-6 text-sm">✦</span>
                <span className="text-champagne font-sans text-[11px] uppercase tracking-[0.15em]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
