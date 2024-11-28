import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
Start; new chat
const Footer = () => {
  return (
    <footer className="bg-primary-deepBlue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Maha Kumbh 2025</h3>
            <p className="text-sm">Experience the world's largest spiritual gathering</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-saffron transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-saffron transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-primary-saffron transition-colors">Accommodation</a></li>
              <li><a href="#" className="hover:text-primary-saffron transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Important Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-saffron transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-primary-saffron transition-colors">Transportation</a></li>
              <li><a href="#" className="hover:text-primary-saffron transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary-saffron transition-colors">Press Releases</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-saffron transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-primary-saffron transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-primary-saffron transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-primary-saffron transition-colors"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 Maha Kumbh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
