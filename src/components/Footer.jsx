import { motion as Motion } from 'framer-motion';
import { HiArrowUp, HiHeart } from "react-icons/hi";
import { footerLinks, socialLinks } from '../data/Links';
import Logo from './Logo';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo height="h-28" variant="light" className="mb-4" />
            <p className="text-[#A89F91] text-sm mb-6">
              Every Stroke Tells a Story
            </p>
            <p className="text-[#8B8680] text-sm leading-relaxed">
              Creating unique hand-drawn artwork that captures emotions,
              memories, and moments. Transform your ideas into timeless pieces.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Motion.a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#A89F91] hover:text-[#C4A77D] transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </Motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Motion.a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-[#A89F91] hover:text-[#C4A77D] transition-colors text-sm"
                    whileHover={{ x: 3 }}
                  >
                    {link.name}
                  </Motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
              Connect
            </h4>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <Motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#3D3D3D] rounded-full flex items-center justify-center text-[#A89F91] hover:bg-[#C4A77D] hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </Motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-[#8B8680] text-sm mb-3">
                Stay updated with new artworks
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-[#3D3D3D] border border-[#4D4D4D] rounded-l-lg text-sm focus:outline-none focus:border-[#C4A77D] transition-colors"
                />
                <Motion.button
                  className="px-4 py-2.5 bg-[#C4A77D] text-[#2C2C2C] font-medium rounded-r-lg hover:bg-[#B8956A] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join
                </Motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#3D3D3D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B8680] text-sm">
            © {new Date().getFullYear()} PixelArt. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 flex items-center gap-1">
            Made with <HiHeart className="text-rose-500 inline" /> by Vinozhan
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#8B8680] hover:text-[#C4A77D] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#8B8680] hover:text-[#C4A77D] text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Back to Top Button */}
          <Motion.button
            onClick={handleScrollToTop}
            className="w-10 h-10 bg-[#3D3D3D] rounded-full flex items-center justify-center text-[#A89F91] hover:bg-[#C4A77D] hover:text-white transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            <HiArrowUp size={18} />
          </Motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
