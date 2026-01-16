import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProcessCard = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-[#E5E2DD]/50">
        {/* Step Number */}
        <span className="absolute -top-3 -right-3 w-8 h-8 bg-[#C4A77D] text-white text-sm font-bold rounded-full flex items-center justify-center">
          {index + 1}
        </span>

        {/* Icon */}
        <motion.div
          className="w-14 h-14 bg-[#FAF8F5] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C4A77D] transition-colors duration-300"
          whileHover={{ rotate: 5 }}
        >
          <step.icon className="w-7 h-7 text-[#C4A77D] group-hover:text-white transition-colors duration-300" />
        </motion.div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">
          {step.title}
        </h3>
        <p className="text-[#8B8680] text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProcessCard;