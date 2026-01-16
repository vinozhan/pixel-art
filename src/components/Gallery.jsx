import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Section from './Section';

// Import images
import Sunrise from '../assets/Sunrise.png';
import womanPortrait from '../assets/womanPortrait.png';
import ParisStreet from '../assets/ParisStreet.png';
import Kitten from '../assets/Kitten.png';
import ForestPath from '../assets/ForestPath.png';
import Flowers from '../assets/Flowers.png';

const artworks = [
  {
    id: 1,
    title: 'Golden Sunrise',
    description: 'A serene landscape capturing the first light of dawn over misty mountains.',
    category: 'Landscape',
    image: Sunrise,
  },
  {
    id: 2,
    title: 'Elegant Portrait',
    description: 'A delicate portrait study showcasing the beauty of human expression.',
    category: 'Portrait',
    image: womanPortrait,
  },
  {
    id: 3,
    title: 'Paris Street',
    description: 'A romantic view of Parisian architecture and cobblestone streets.',
    category: 'Cityscape',
    image: ParisStreet,
  },
  {
    id: 4,
    title: 'Curious Kitten',
    description: 'An adorable illustration of a playful kitten with expressive eyes.',
    category: 'Illustration',
    image: Kitten,
  },
  {
    id: 5,
    title: 'Forest Path',
    description: 'A mystical journey through an enchanted woodland bathed in soft light.',
    category: 'Landscape',
    image: ForestPath,
  },
  {
    id: 6,
    title: 'Spring Blooms',
    description: 'Vibrant flowers captured in their full glory, celebrating nature beauty.',
    category: 'Botanical',
    image: Flowers,
  },
];

const ArtworkCard = ({ artwork, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
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
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={artwork.image}
            alt={artwork.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
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
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-white/90 text-sm mb-4">{artwork.description}</p>
            <motion.button
              className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#C4A77D] transition-colors"
              whileHover={{ x: 5 }}
            >
              Read More <HiArrowRight />
            </motion.button>
          </motion.div>
        </div>

        {/* Card Footer */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[#2C2C2C] group-hover:text-[#C4A77D] transition-colors duration-300">
            {artwork.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const Gallery = () => {
  return (
    <Section
      id="gallery"
      subtitle="CURATED COLLECTION"
      title="Artwork Gallery"
      description="Explore a diverse collection of hand-drawn artworks, from serene landscapes to expressive portraits. Each piece is crafted with passion and attention to detail."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <motion.button
          className="px-8 py-4 border-2 border-[#2C2C2C] text-[#2C2C2C] font-medium rounded-full hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Artworks
        </motion.button>
      </motion.div>
    </Section>
  );
};

export default Gallery;
