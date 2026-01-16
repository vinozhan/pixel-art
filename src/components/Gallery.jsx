import { motion } from 'framer-motion';
import Section from './Section';
import { artworks } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';

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
