import { motion } from 'motion/react';

const services = [
  {
    id: '01',
    name: 'Bridal & Pre-Wedding',
    description: 'Bespoke bridal looks and pre-wedding shoot artistry. From mehendi to the reception, we craft a cohesive story of beauty for your journey.',
  },
  {
    id: '02',
    name: 'Maternity Artistry',
    description: 'Celebrating motherhood with gentle, glowing makeup for maternity shoots. Capturing the radiance of this special chapter in your life.',
  },
  {
    id: '03',
    name: 'Model & Editorial',
    description: 'High-definition makeup for fashion editorials, commercial shoots, and runway. Precision and creativity that meets the highest production standards.',
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-ivory section-padding">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <div className="label-line">WHAT I OFFER</div>
          <h2 className="mt-6 text-[42px] md:text-[52px] text-burgundy font-normal">
            Artistry for every significant milestone.
          </h2>
          <p className="mt-4 text-[15px] font-light text-muted">
            Every package is fully customised to your unique vision and requirements.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
              className="bg-white border border-champagne rounded-[4px] p-8 md:p-10 flex flex-col items-start transition-colors duration-500 hover:border-gold group"
            >
              <div className="w-10 h-px bg-gold mb-6" />
              <span className="text-[11px] uppercase tracking-widest text-muted mb-2">
                {service.id}
              </span>
              <h3 className="text-[28px] font-semibold text-burgundy mb-4">
                {service.name}
              </h3>
              <p className="text-[14px] font-light text-muted leading-[1.8] mb-8">
                {service.description}
              </p>
              
              <div className="mt-auto pt-8 border-t border-champagne/50 w-full">
                <a 
                  href="#contact" 
                  className="text-[13px] font-medium text-gold flex items-center group-hover:underline"
                >
                  Enquire for Details →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
