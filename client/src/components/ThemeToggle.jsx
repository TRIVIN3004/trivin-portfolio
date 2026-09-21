import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`relative p-2.5 rounded-xl transition-all duration-300 backdrop-blur-md border ${
        isDark
          ? 'bg-white/10 border-white/20 text-yellow-300 hover:bg-white/20 shadow-[0_0_15px_rgba(255,215,0,0.25)]'
          : 'bg-white/80 border-slate-300 text-indigo-600 hover:bg-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]'
      } ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Sun size={20} className="stroke-[2.2]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25 }}
            className="flex items-center justify-center"
          >
            <Moon size={20} className="stroke-[2.2]" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
