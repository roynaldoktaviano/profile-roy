'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages, ArrowDown } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';

type Language = 'en' | 'ja';

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = turun, -1 = naik
  
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  const content = {
    en: { scroll: 'Scroll to explore', lang: 'JP' },
    ja: { scroll: 'スクロール', lang: 'EN' }
  };

  const t = content[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };

  // Fungsi navigasi yang disatukan
  const paginate = (newDirection: number) => {
    if (isScrolling.current) return;

    const newSection = currentSection + newDirection;
    if (newSection < 0 || newSection > 3) return; // Mentok ujung

    isScrolling.current = true;
    setDirection(newDirection);
    setCurrentSection(newSection);

    // Kunci scroll selama animasi (800ms)
    setTimeout(() => {
      isScrolling.current = false;
    }, 800);
  };

  // --- HANDLER UNTUK LAPTOP/MOUSE ---
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Abaikan scroll yang terlalu pelan (antisipasi trackpad sensitif)
    if (Math.abs(e.deltaY) < 20) return;
    paginate(e.deltaY > 0 ? 1 : -1);
  };

  // --- HANDLER UNTUK MOBILE (SWIPE HP) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndY = e.changedTouches[0].clientY;
    const swipeDistance = touchStartY.current - touchEndY;

    // Minimum jarak usapan (swipe threshold) agar tidak sensitif
    if (Math.abs(swipeDistance) > 50) {
      paginate(swipeDistance > 0 ? 1 : -1);
    }
  };

  // Varian animasi dinamis: geser dari atas atau bawah tergantung arah
  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-[#2a3f75] via-[#3e5ba9] to-[#2a3f75] overflow-hidden" 
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Tombol Language - Tema Glassmorphism */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onClick={toggleLanguage}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-50 px-5 py-2.5 bg-white/10 hover:bg-white backdrop-blur-md border border-white/20 text-white hover:text-[#3e5ba9] rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg group"
      >
        <Languages className="w-4 h-4" />
        <span className="font-bold text-sm tracking-widest">{t.lang}</span>
      </motion.button>

      {/* Area Konten Utama */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-y-auto overflow-x-hidden pt-20 pb-24 custom-scrollbar"
        >
          {/* Wrapper untuk membatasi lebar agar rapi */}
          <div className="w-full h-full flex items-center justify-center">
            {currentSection === 0 && <Hero language={language} />}
            {currentSection === 1 && <About language={language} />}
            {currentSection === 2 && <Portfolio language={language} />}
            {currentSection === 3 && <Contact language={language} />}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Indikator Titik (Dots Navigation) */}
      <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => {
              const newDirection = index > currentSection ? 1 : -1;
              if (index !== currentSection) {
                setDirection(newDirection);
                setCurrentSection(index);
              }
            }}
            className={`w-2.5 rounded-full transition-all duration-500 ease-out ${
              currentSection === index 
                ? 'h-8 bg-yellow-300 shadow-[0_0_10px_rgba(253,224,71,0.5)]' 
                : 'h-2.5 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Indikator Scroll di bawah (Hanya muncul di Hero) */}
      <AnimatePresence>
        {currentSection === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 text-white/50"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
              {t.scroll}
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}