import React, { useRef, useState } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

export const ArtworkCard = ({ artwork, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500">
        {/* Image Container */}
        <div className="relative aspect-4/5 overflow-hidden">
          <Motion.img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay */}
          <Motion.div
            className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2C2C2C] text-xs font-medium rounded-full">
              {artwork.category}
            </span>
          </div>

          {/* Hover Content */}
          <Motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/90 text-sm mb-4">{artwork.description}</p>
            <Motion.button
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#C4A77D] transition-colors"
              whileHover={{ x: 5 }}
            >
              Read More <HiArrowRight />
            </Motion.button>
          </Motion.div>
        </div>

        {/* Card Footer */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#2C2C2C] group-hover:text-[#C4A77D] transition-colors duration-300">
            {artwork.title}
          </h3>
        </div>
      </div>
    </Motion.div>
  );
};
