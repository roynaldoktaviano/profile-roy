'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ArrowRight } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';

type Language = 'en' | 'ja';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const content = {
    en: {
      scroll: 'Scroll to explore'
    },
    ja: {
      scroll: 'スクロール'
    }
  };

  const t = content[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };

  const scrollToSection = (index: number) => {
    setCurrentSection(index);
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    const direction = e.deltaY > 0 ? 1 : -1;
    let newSection = currentSection + direction;

    if (newSection < 0) newSection = 0;
    if (newSection > 3) newSection = 3;

    setCurrentSection(newSection);
  };

  return (
    <div className="fixed inset-0 bg-white overflow-hidden" onWheel={handleWheel}>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={toggleLanguage}
        className="fixed top-8 right-8 z-50 px-6 py-3 bg-stone-100 hover:bg-stone-200 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
      >
        <Languages className="w-5 h-5 text-stone-600" />
        <span className="text-stone-800 font-medium">
          {language === 'en' ? 'JP' : 'EN'}
        </span>
      </motion.button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 w-screen h-screen flex items-center justify-center"
        >
          {currentSection === 0 && <Hero language={language} />}
          {currentSection === 1 && (
            <div className="w-full max-w-6xl mx-auto px-4 md:px-16">
              <About language={language} />
            </div>
          )}
          {currentSection === 2 && (
            <div className="w-full max-w-6xl mx-auto px-4 md:px-16">
              <Portfolio language={language} />
            </div>
          )}
          {currentSection === 3 && (
            <div className="w-full max-w-6xl mx-auto px-4 md:px-16">
              <Contact language={language} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index ? 'bg-stone-800 scale-125' : 'bg-stone-300'
            }`}
          />
        ))}
      </div>

      {currentSection === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 text-stone-500"
        >
          <ArrowRight className="w-5 h-5" />
          <span className="text-sm tracking-widest">{t.scroll}</span>
        </motion.div>
      )}
    </div>
  );
}
