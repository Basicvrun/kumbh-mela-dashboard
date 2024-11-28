import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const images = [
    '/images/Image9.jpg',
    '/images/image2.jpg',
    '/images/image10.jpg',
    '/images/image11.jpg',
    '/images/image12.jpg',
    '/images/image15.jpg',
    '/images/image13.jpg',
    '/images/image14.jpg',
  ];

  return (
    // Added p-8 for padding and rounded-2xl for smoother corners
    <div className="relative h-[60vh] overflow-hidden p-16 rounded-2xl">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000 }}
        loop={true}
        className="absolute inset-0 w-400px h-full z-0 rounded-2xl"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center rounded-2xl"
              style={{ backgroundImage: `url(${image})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-10 rounded-2xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Kumbh Mela 2025</h1>
          <p className="text-xl">Experience the world's largest spiritual gathering</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
