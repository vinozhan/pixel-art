import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiLightBulb, HiPhotograph, HiCog, HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import Section from './Section';

const commissionFeatures = [
  {
    icon: HiLightBulb,
    title: 'Your Ideas',
    description: 'Share your vision, inspiration, and what you want the artwork to represent.',
  },
  {
    icon: HiPhotograph,
    title: 'Personal References',
    description: 'Provide photos, sketches, or any reference material that helps guide the creation.',
  },
  {
    icon: HiCog,
    title: 'Unique Requirements',
    description: 'Specify size, style preferences, color palette, and any special details you desire.',
  },
];

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'hello@pixelart.studio',
    href: 'mailto:hello@pixelart.studio',
  },
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: HiLocationMarker,
    label: 'Studio',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section
      id="contact"
      subtitle="COMMISSION YOUR ARTWORK"
      title="Let's Create Together"
      description="Ready to bring your vision to life? Every custom artwork is crafted based on your unique ideas and requirements."
    >
      <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - Commission Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">
            How Custom Commissions Work
          </h3>

          <p className="text-[#8B8680] mb-8">
            Each artwork is created based on your personal vision. Whether it is a portrait
            of a loved one, a landscape from your favorite memory, or an illustration of
            your imagination, I work closely with you to ensure the final piece exceeds
            your expectations.
          </p>

          {/* Commission Features */}
          <div className="space-y-6">
            {commissionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#C4A77D]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#2C2C2C] mb-1">{feature.title}</h4>
                  <p className="text-sm text-[#8B8680]">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-10 pt-8 border-t border-[#E5E2DD]">
            <h4 className="font-semibold text-[#2C2C2C] mb-4">Get in Touch</h4>
            <div className="space-y-3">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-3 text-[#8B8680] hover:text-[#C4A77D] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <info.icon className="w-5 h-5" />
                  <span>{info.value}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#E5E2DD]/50">
            <h3 className="text-xl font-bold text-[#2C2C2C] mb-6">
              Request a Commission
            </h3>

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl focus:outline-none focus:border-[#C4A77D] focus:ring-2 focus:ring-[#C4A77D]/20 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl focus:outline-none focus:border-[#C4A77D] focus:ring-2 focus:ring-[#C4A77D]/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl focus:outline-none focus:border-[#C4A77D] focus:ring-2 focus:ring-[#C4A77D]/20 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="artworkType" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Artwork Type
                </label>
                <select
                  id="artworkType"
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl focus:outline-none focus:border-[#C4A77D] focus:ring-2 focus:ring-[#C4A77D]/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select artwork type</option>
                  <option value="portrait">Portrait</option>
                  <option value="landscape">Landscape</option>
                  <option value="illustration">Illustration</option>
                  <option value="botanical">Botanical</option>
                  <option value="custom">Custom / Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Describe Your Vision
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E5E2DD] rounded-xl focus:outline-none focus:border-[#C4A77D] focus:ring-2 focus:ring-[#C4A77D]/20 transition-all resize-none"
                  placeholder="Tell me about your idea, any reference materials you have, and what the artwork means to you..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-[#2C2C2C] text-white font-medium rounded-xl hover:bg-[#C4A77D] transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>

              <p className="text-xs text-center text-[#8B8680]">
                I typically respond within 24-48 hours. Let's create something beautiful together.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
