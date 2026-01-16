import { useState, useEffect } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../data/Links';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo height="h-28" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[#2C2C2C] hover:text-[#C4A77D] transition-colors duration-200 text-sm font-medium tracking-wide"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </Motion.a>
            ))}
            <Motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-5 py-2 bg-[#2C2C2C] text-white text-sm font-medium rounded-full hover:bg-[#C4A77D] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Commission
            </Motion.a>
          </div>

          {/* Mobile Menu Button */}
          <Motion.button
            className="md:hidden p-2 text-[#2C2C2C]"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </Motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-md border-t border-[#E5E2DD]"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <Motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-[#2C2C2C] hover:text-[#C4A77D] transition-colors duration-200 text-lg font-medium"
                >
                  {link.name}
                </Motion.a>
              ))}
              <Motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="inline-block px-6 py-3 bg-[#2C2C2C] text-white text-sm font-medium rounded-full hover:bg-[#C4A77D] transition-colors duration-300"
              >
                Commission Artwork
              </Motion.a>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
