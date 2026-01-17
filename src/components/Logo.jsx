import { motion as Motion } from 'framer-motion';
import logoImage from '../assets/images/pixelArt.png';

const Logo = ({
  className = '',
  height = 'h-28',
  onClick,
  variant = 'default' // 'default' or 'light' for footer
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      const element = document.querySelector('#home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Motion.a
      href="#home"
      onClick={handleClick}
      className={`inline-block ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={logoImage}
        alt="PixelArt logo"
        className={`${height} w-auto ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
    </Motion.a>
  );
};

export default Logo;


