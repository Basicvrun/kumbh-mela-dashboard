import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, ThermometerSun, AlertCircle } from 'lucide-react';
import Card from '../components/Card';
import Stat from '../components/Stat';
import HeroSection from '../components/HeroSection';
import LiveCrowdMap from '../components/LiveCrowdMap'; // Import LiveCrowdMap
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Home = () => {
  const [activeCard, setActiveCard] = useState('Live Crowd Map');

  const cardContent = {
    'Live Crowd Map': <LiveCrowdMap />, // Render LiveCrowdMap component here
    'Crowd Density Heatmap': '[Crowd Density Heatmap Visualization]',
    'Hourly Attendance': '[Bar Chart of Hourly Attendance]',
  };

  return (
    <div>
      <HeroSection />
      <div className="content container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 dark:text-mutedWhite dark:bg-black"
        >
          <Card title="Visitors" icon={<Users />} color="#FFB347">
            <Stat label="2,550,000" value="↑ 12% from yesterday" />
          </Card>
          <Card title="Pilgrims Arrived" icon={<Calendar />} color="#13908e">
            <Stat label="23,210" value="Last hour" />
          </Card>
          <Card title="Weather" icon={<ThermometerSun />} color="#ff0000">
            <Stat label="35°C" value="Feels like: 38°C, Humid" />
          </Card>
          <Card title="Alerts" icon={<AlertCircle />} color="#008dff">
            <Stat label="4" value="2 High Priority" />
          </Card>
        </motion.div>

        <div className="flex flex-col lg:flex-row-reverse lg:space-x-reverse lg:space-x-6">
          <div className="lg:w-1/3 flex flex-col space-y-6 mt-6">
            <motion.button
              onClick={() => setActiveCard('Live Crowd Map')}
              whileHover={{ scale: 1.07 }}
              className="mt-12 w-11/12 p-11 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white dark:text-mutedWhite rounded-lg shadow-2xl hover:shadow-2xl transition-all"
            >
              Live Crowd Map
            </motion.button>
            <motion.button
              onClick={() => setActiveCard('Crowd Density Heatmap')}
              whileHover={{ scale: 1.07 }}
              className="mt-12 w-11/12 p-11 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white dark:text-mutedWhite rounded-lg shadow-2xl hover:shadow-2xl transition-all"
            >
              Crowd Density Heatmap
            </motion.button>
            <motion.button
              onClick={() => setActiveCard('Hourly Attendance')}
              whileHover={{ scale: 1.07 }}
              className="mt-12 w-11/12 p-11 bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50 text-white dark:text-mutedWhite rounded-lg shadow-2xl hover:shadow-2xl transition-all"
            >
              Hourly Attendance
            </motion.button>
          </div>

          <div className="lg:w-2/3 mt-6 lg:mt-0">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-transparent dark:bg-black text-white dark:text-mutedWhite rounded-3xl shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4">{activeCard}</h2>
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                {cardContent[activeCard]}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
