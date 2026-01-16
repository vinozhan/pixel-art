import { motion as Motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import customImage from '../assets/custom.png';
import ProcessCard from './ProcessCard';
import { processSteps } from '../data/processSteps';


const About = () => {
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: '-100px' });

  return (
    <Section
      id="about"
      bgColor="bg-[#F5F3EF]"
      subtitle="THE CREATIVE JOURNEY"
      title="Artist Story"
      description="Behind every stroke is a dedication to authenticity, craftsmanship, and the desire to create art that resonates with the soul."
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        {/* Image */}
        <Motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -inset-4 bg-[#C4A77D]/10 rounded-3xl" />

            <Motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={customImage}
                alt="Artist workspace"
                className="w-full h-auto object-cover"
              />
            </Motion.div>

            {/* Floating stat card */}
            <Motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl"
            >
              <p className="text-3xl font-bold text-[#C4A77D]">100+</p>
              <p className="text-sm text-[#8B8680]">Artworks Created</p>
            </Motion.div>
          </div>
        </Motion.div>

        {/* Content */}
        <Motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] mb-6">
            Where Passion Meets Precision
          </h3>

          <div className="space-y-4 text-[#8B8680]">
            <p>
              For years, I have dedicated myself to the timeless art of hand-drawing,
              believing that every line carries intention and every shade tells a story.
              In a world of digital automation, there is something irreplaceable about
              the warmth and character of traditional artwork.
            </p>
            <p>
              My workspace is where imagination becomes reality—surrounded by pencils,
              brushes, and paper, each tool waiting to help bring visions to life.
              Whether it is a portrait capturing someone's essence or a landscape
              preserving a fleeting moment, my goal is to create art that moves people.
            </p>
            <p>
              Every commission is a collaboration, a journey we take together to
              transform your ideas into a tangible piece of art that you can treasure
              for years to come.
            </p>
          </div>

          <Motion.button
            className="mt-8 px-8 py-4 bg-[#2C2C2C] text-white font-medium rounded-full hover:bg-[#C4A77D] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Commission
          </Motion.button>
        </Motion.div>
      </div>

      {/* Process Steps */}
      <div className="mt-20">
        <Motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-[#2C2C2C] text-center mb-10"
        >
          The Creative Process
        </Motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.title} step={step} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
