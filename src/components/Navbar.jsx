import React, { useContext, useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { DarkModeContext } from '../contexts/DarkModeContext';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { BellIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [activeTab, setActiveTab] = useState('/');

  useEffect(() => {
    socket.on('notification', (notification) => {
      setNotifications((prevNotifications) => [notification, ...prevNotifications]);
      setUnreadCount((prevCount) => prevCount + 1);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setUnreadCount(0);
  };

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Crowd Flow', path: '/crowd-flow' },
    { name: 'Alert', path: '/alerts' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'User', path: '/users' },
  ];

  return (
    <nav
  className={`absolute top-0 w-full z-50 p-3 flex justify-between items-center ${
    isDarkMode ? 'bg-black text-white' : 'bg-transparent text-white'
  } transition-all duration-300 mb-8`}

>

      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 mr-4" />
      </div>

      <ul className="flex space-x-8 text-lg font-semibold ml-auto mr-12">
        {navItems.map((item) => (
          <li key={item.name} onClick={() => setActiveTab(item.path)}>
            <Link
              to={item.path}
              className={`hover:text-yellow-500 transition-all duration-300 ${
                activeTab === item.path ? 'text-yellow-500 underline' : ''
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative">
        <button onClick={toggleMenu} className="relative p-2">
          <BellIcon className={`w-6 h-6 ${isDarkMode ? 'text-yellow-500' : 'text-black'}`} />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 block w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
              {unreadCount}
            </span>
          )}
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute right-0 mt-2 w-64 shadow-2xl rounded-lg p-4 z-50 ${
              isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            <h4 className="font-bold">Notifications</h4>
            <ul className="mt-2">
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <li key={index} className="py-2 border-b border-gray-700">
                    {notification.message} <br />
                    <small className="text-xs text-gray-400">
                      {new Date(notification.timestamp).toLocaleTimeString()}
                    </small>
                  </li>
                ))
              ) : (
                <li className="py-2 text-gray-400">No new notifications</li>
              )}
            </ul>
          </motion.div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button className="cta-button"> </button>
        <button onClick={toggleDarkMode} className="p-2 rounded-full">
          {isDarkMode ? <Sun size={24} color="#ffcc00" /> : <Moon size={24} color="#ffcc00" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
