import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = ({
  id,
  title,
  subtitle,
  description,
  children,
  className = '',
  bgColor = 'bg-[#FAF8F5]',
  titleAlign = 'center',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id={id} className={`py-20 md:py-32 ${bgColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`mb-12 md:mb-16 ${
            titleAlign === 'center' ? 'text-center' : 'text-left'
          }`}
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#C4A77D] font-medium tracking-widest text-sm mb-4"
            >
              {subtitle}
            </motion.p>
          )}

          {title && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6"
            >
              {title}
            </motion.h2>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-[#8B8680] text-lg max-w-2xl ${
                titleAlign === 'center' ? 'mx-auto' : ''
              }`}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
};

export default Section;
