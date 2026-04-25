import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: 'Portfolio', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Journal', href: '#' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full h-[72px] z-[5000] transition-all duration-500 flex items-center justify-between px-6 md:px-16',
        isScrolled ? 'bg-ivory shadow-soft' : 'bg-transparent border-b border-champagne'
      )}
      style={isScrolled ? { boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)' } : {}}
    >
      {/* Logo */}
      <a href="#" className="flex items-center group">
        <span className="text-burgundy font-display font-medium text-[22px] tracking-[0.05em] uppercase">Priyasha Katariya</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-12">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-[11px] uppercase tracking-[0.2em] font-medium text-muted hover:text-burgundy transition-colors">
            {link.name}
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="hidden md:block">
        <button className="border border-champagne px-8 py-3 text-[11px] uppercase tracking-[0.1em] font-medium text-muted hover:border-gold hover:text-gold transition-all duration-300">
          Book Consultation
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-burgundy"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu size={24} />
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-ivory z-[6000] flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-burgundy"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[32px] font-display text-burgundy hover:text-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="btn-gold mt-4 text-sm px-8 py-3"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
