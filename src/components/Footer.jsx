import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary-deepBlue dark:bg-deepBlue text-white dark:text-mutedWhite py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Title and description */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <h3 className="text-xl font-bold mb-4">Maha Kumbh 2025</h3>
            <p className="text-sm">Experience the world's largest spiritual gathering</p>
          </motion.div>

          {/* Section 2: Quick Links */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="https://kumbh.gov.in/en/introduction#" className="hover:text-primary-saffron transition-colors">About</a></li>
              <li><a href="https://kumbh.gov.in/en/events" className="hover:text-primary-saffron transition-colors">Events</a></li>
              <li><a href="https://mahakumbh.in/accommodation-at-kumbh-mela-2025/" className="hover:text-primary-saffron transition-colors">Accommodation</a></li>
              <li><a href="+91 532 2500775" className="hover:text-primary-saffron transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Section 3: Important Information */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <h4 className="text-lg font-semibold mb-4">Important Information</h4>
            <ul className="space-y-2">
              <li><a href="https://kumbh.gov.in/en/dosanddonts" className="hover:text-primary-saffron transition-colors">Safety Guidelines</a></li>
              <li><a href="#https://tourism.gov.in/" className="hover:text-primary-saffron transition-colors">Ministry of Tourism India</a></li>
              <li><a href="https://mahakumbh.in/blog/" className="hover:text-primary-saffron transition-colors">Blogs</a></li>
              <li><a href="https://www.amarujala.com/uttar-pradesh/allahabad" className="hover:text-primary-saffron transition-colors">Press Releases</a></li>
            </ul>
          </motion.div>

          {/* Section 4: Social Media Links */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/thekumbhmelaindia/"
                className="hover:text-primary-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="https://x.com/kumbhmelapolup"
                className="hover:text-primary-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/mahakumbhh25/?hl=en"
                className="hover:text-primary-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-primary-saffron transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Mail />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-500 text-center">
          <p>&copy; 2025 Maha Kumbh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
