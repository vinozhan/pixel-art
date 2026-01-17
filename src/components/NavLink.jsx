import { motion as Motion } from 'framer-motion';

const NavLink = ({ href, isActive, onClick, children, isMobile = false, index }) => {
  if (isMobile) {
    return (
      <Motion.a
        href={href}
        onClick={onClick}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`block text-lg font-medium transition-colors duration-200 ${
          isActive ? 'text-[#C4A77D]' : 'text-[#2C2C2C] hover:text-[#C4A77D]'
        }`}
      >
        {children}
      </Motion.a>
    );
  }

  return (
    <Motion.a
      href={href}
      onClick={onClick}
      className="relative text-sm font-medium tracking-wide py-2"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`transition-colors duration-200 ${
          isActive ? 'text-[#C4A77D]' : 'text-[#2C2C2C] hover:text-[#C4A77D]'
        }`}
      >
        {children}
      </span>
      {/* Animated underline */}
      <Motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-[#C4A77D] rounded-full"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </Motion.a>
  );
};

export default NavLink;