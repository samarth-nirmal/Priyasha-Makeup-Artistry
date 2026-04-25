import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, ChevronLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Thank you for your enquiry. Priyasha will get back to you soon.');
  };

  return (
    <section id="contact" className="bg-burgundy py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20">

        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 font-sans text-[10px] font-normal tracking-[0.3em] text-champagne uppercase">
            <div className="w-8 h-px bg-champagne opacity-50" />
            GET IN TOUCH
          </div>

          <h2 className="mt-6 text-[42px] md:text-[52px] text-champagne font-light leading-[1.15]">
            Let's make your next appearance unforgettable.
          </h2>

          <p className="mt-8 text-[15px] font-light leading-[1.8] text-champagne/75 max-w-[480px]">
            I take on a limited number of bookings each season to ensure every client receives my full dedication. Reach out early to secure your date.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-champagne">
              <MapPin size={18} className="text-gold" />
              <span className="text-[14px] font-sans">Pune, Maharashtra · Serving Pan-India</span>
            </div>
            <div className="flex items-center gap-4 text-champagne">
              <Phone size={18} className="text-gold" />
              <span className="text-[14px] font-sans">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 text-champagne">
              <Mail size={18} className="text-gold" />
              <span className="text-[14px] font-sans">hello@Priyasha.in</span>
            </div>
            <div className="flex items-center gap-4 text-champagne">
              <Instagram size={18} className="text-gold" />
              <span className="text-[14px] font-sans">@Priyashatariya_makeupartist</span>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-white/5 border border-champagne/15 rounded-[4px] p-8 md:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/60">Full Name</label>
              <input
                {...register('name')}
                type="text"
                placeholder="Your name"
                className="bg-transparent border-b border-champagne/30 py-3 text-champagne text-[14px] focus:outline-none focus:border-gold transition-colors placeholder:text-champagne/20"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/60">Email Address</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="hello@example.com"
                  className="bg-transparent border-b border-champagne/30 py-3 text-champagne text-[14px] focus:outline-none focus:border-gold transition-colors placeholder:text-champagne/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/60">Phone Number</label>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="+91"
                  className="bg-transparent border-b border-champagne/30 py-3 text-champagne text-[14px] focus:outline-none focus:border-gold transition-colors placeholder:text-champagne/20"
                />
              </div>
            </div>

            {/* Event Date & Event Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/60">Event Date</label>
                <input
                  {...register('date')}
                  type="date"
                  className="bg-transparent border-b border-champagne/30 py-3 text-champagne text-[14px] focus:outline-none focus:border-gold transition-colors inverted-scheme"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/60">Event Type</label>
                <select
                  {...register('eventType')}
                  className="bg-transparent border-b border-champagne/30 py-3 text-champagne text-[14px] focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="" className="bg-burgundy">Select event</option>
                  <option value="bridal" className="bg-burgundy">Bridal Makeup</option>
                  <option value="maternity" className="bg-burgundy">Maternity Shoot</option>
                  <option value="model" className="bg-burgundy">Model / Editorial</option>
                  <option value="pre-wedding" className="bg-burgundy">Pre-Wedding / Engagement</option>
                  <option value="reception" className="bg-burgundy">Reception / Party</option>
                  <option value="other" className="bg-burgundy">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.2em] text-champagne/60">Message</label>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Tell me about your vision..."
                className="bg-transparent border-b border-champagne/30 py-3 text-champagne text-[14px] focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-champagne/20"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-white font-display text-[18px] py-4 rounded-[2px] transition-colors tracking-wide"
              >
                Send Enquiry
              </button>
              <p className="text-[12px] text-champagne/50 text-center font-light">
                I typically respond within 24 hours. All enquiries are treated with complete privacy.
              </p>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
