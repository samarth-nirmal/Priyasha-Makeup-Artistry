import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Ananya didn't just do my makeup — she understood me. I walked down the aisle feeling more like myself than I ever have. That's the rarest gift.",
    name: "ADITI JOSHI",
    detail: "Royal Wedding · ITC Grand Bharat, Gurugram"
  },
  {
    quote: "I've seen many bridal looks but nothing compared to the moment I looked in the mirror on my wedding day. Ananya is a true artist. Worth every rupee and more.",
    name: "NEHA DESHMUKH",
    detail: "Intimate Wedding · Mumbai"
  },
  {
    quote: "From the first trial to the final touch-up, she was calm, professional, and incredibly talented. My entire family asked for her card. She's that good.",
    name: "POOJA KULKARNI",
    detail: "Destination Wedding · Udaipur"
  },
  {
    quote: "I was nervous about looking 'too done up'. Ananya listened to everything I said and created something that was entirely, perfectly me. I cried happy tears.",
    name: "SAYALI PATIL",
    detail: "Telugu Wedding Ceremony · Hyderabad"
  },
  {
    quote: "What set Ananya apart was how she made me feel during the whole process — calm, beautiful, and celebrated. The photos are incredible. The memory is priceless.",
    name: "GAURI KADAM",
    detail: "Punjabi Wedding · Chandigarh"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="bg-cream section-padding overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 flex flex-col items-center max-w-[720px] mx-auto"
        >
          <div className="label-line">KIND WORDS</div>
          <h2 className="mt-6 text-[36px] sm:text-[42px] md:text-[52px] text-burgundy font-normal italic leading-[1.1]">
            Voices of those I've had the <br className="hidden md:block" /> honour of adorning.
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Fixed height container to ensure consistency */}
          <div className="relative min-h-[420px] sm:min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="text-gold fill-gold" />
                    ))}
                  </div>
                  
                  <blockquote className="text-burgundy font-display italic text-[22px] sm:text-[28px] md:text-[34px] leading-[1.4] font-light">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="mt-12 flex flex-col items-center">
                    <div className="w-12 h-px bg-gold/30 mb-6" />
                    <div className="text-burgundy font-sans text-[13px] font-semibold tracking-[0.2em] uppercase">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="mt-2 text-muted font-sans text-[12px] font-light tracking-wide uppercase">
                      {testimonials[currentIndex].detail}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 -px-4 md:-px-20 pointer-events-none">
            <button 
              onClick={prev}
              className="pointer-events-auto p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gold/20 text-gold hover:bg-gold hover:text-white transition-all duration-300 -translate-x-2 md:-translate-x-12"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="pointer-events-auto p-3 rounded-full bg-white/50 backdrop-blur-sm border border-gold/20 text-gold hover:bg-gold hover:text-white transition-all duration-300 translate-x-2 md:translate-x-12"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-gold" : "bg-gold/20"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
