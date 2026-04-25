import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { CardCarousel } from './ui/card-carousel';

const heroImages = [
  '/Priyasha-Makeup-Artistry/Assets/Gallary/1.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/2.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/3.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/4.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/5.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/6.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/7.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/8.jpg',
  '/Priyasha-Makeup-Artistry/Assets/Gallary/9.jpg',
];

function Counter({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" });
    return controls.stop;
  }, [count, value, duration]);

  useEffect(() => {
    return rounded.on("change", (v) => setDisplayValue(v));
  }, [rounded]);

  return <span>{displayValue.toString().padStart(2, '0')}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] bg-ivory md:bg-ivory flex items-stretch pt-20 pb-12 overflow-hidden">
      {/* Mobile Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full md:hidden bg-[url('/Priyasha-Makeup-Artistry/Assets/free-photo-of-bride-and-groom-in-traditional-wedding-clothes-embracing-in-a-park.jpeg')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 w-full h-full md:hidden bg-ivory/70 backdrop-blur-[2px] z-0" />

      <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-[55%_45%] w-full relative z-10">

        {/* Left Column */}
        <div className="px-6 md:px-12 lg:px-20 2xl:px-32 py-12 md:py-16 flex flex-col justify-center border-r border-burgundy/5 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col relative"
          >
            <div className="w-12 h-px bg-gold mb-6" />
            <span className="text-[10px] md:text-[11px] 2xl:text-[13px] uppercase tracking-[0.4em] text-charcoal/80 font-normal">
              High-End Bridal & Editorial Artistry
            </span>

            <h1 className="mt-6 text-[42px] sm:text-[54px] md:text-[70px] lg:text-[80px] 2xl:text-[100px] 3xl:text-[120px] leading-[1] md:leading-[0.9] text-burgundy tracking-[-0.02em]">
              <span className="font-display italic font-normal">Professional makeup</span>
              <br />
              <span className="font-sans not-italic font-light text-[24px] sm:text-[32px] md:text-[40px] 2xl:text-[48px] 3xl:text-[56px] tracking-wide text-charcoal/80">by Priyasha Katariya</span>
            </h1>

            <p className="mt-6 md:mt-8 text-[15px] md:text-[16px] leading-[1.8] text-charcoal/80 font-light max-w-[460px]">
              Based in Pune, Priyasha Katariya specializes in bespoke artistry for bridal, maternity, editorial, and commercial projects across India.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6 md:gap-10">
              <a href="#work" className="relative group cursor-pointer">
                <div className="bg-burgundy text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-medium z-10 relative transition-transform duration-300 group-hover:-translate-y-1">
                  View Portfolio
                </div>
                <div className="absolute top-3 left-0 w-full h-full bg-gold -z-0 transition-transform duration-300 group-hover:translate-y-1" />
              </a>

              <div className="flex flex-col">
                <a href="#contact" className="text-[10px] uppercase tracking-[0.2em] text-burgundy font-bold hover:text-gold transition-colors">
                  Check Availability
                </a>
                <div className="w-full h-px bg-burgundy/20 mt-1" />
              </div>
            </div>

            <div className="mt-16 w-full h-px bg-burgundy/10" />

            <div className="mt-8 flex gap-10 md:gap-20">
              <div className="flex flex-col">
                <span className="text-[28px] md:text-[36px] font-display text-burgundy font-light">
                  <Counter value={200} suffix="+" />
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-charcoal/80 -mt-1 font-medium">Clients Served</span>
              </div>
              <div className="flex flex-col relative">
                <div className="absolute -left-5 md:-left-10 top-0 w-px h-full bg-burgundy/5" />
                <span className="text-[28px] md:text-[36px] font-display text-burgundy font-light">
                  <Counter value={8} />
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-charcoal/80 -mt-1 font-medium">Years Mastery</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column — Desktop Card Carousel */}
        <div className="relative bg-transparent hidden md:flex flex-col items-center justify-center p-0 md:h-auto md:min-h-[80vh] order-1 md:order-2 w-full lg:w-[120%] lg:-translate-x-12">
          <div className="absolute top-8 right-12 hidden md:block z-10">
            <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal/80 font-medium opacity-50">
              Pune · Established 2018
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex-1 flex items-center justify-center w-full h-full"
          >
            <CardCarousel
              images={heroImages}
              autoplayDelay={3000}
              showNavigation={false}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
