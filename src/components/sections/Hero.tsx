'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { useState } from 'react';

interface HeroProps {
  language: 'en' | 'ja';
}

export default function Hero({ language }: HeroProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollToSection = (index: number) => {
    setCurrentSection(index);
  };
  
  const content = {
    en: {
      name: 'Roynald Oktaviano Kalele',
      role: 'Website Developer & Digital Marketing',
      subtitle: 'Crafting websites with performance and growth in mind',
      cta: 'See My Work'
    },
    ja: {
      name: 'ロイナルド・オクタビアーノ・カレレ',
      role: 'ウェブサイト開発者 & デジタルマーケティング',
      subtitle: 'パフォーマンスと成長を念頭に置いたウェブサイト制作',
      cta: '私の作品を見る'
    }
  };

  const t = content[language];

  return (
    <div className="w-full space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center space-y-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <div className="w-16 h-16 mx-auto border-2 border-stone-800 rounded-full flex items-center justify-center">
            <span className="text-3xl font-light text-stone-800">
              <img src="./log.png" alt="" className='w-10' width={40} height={40} />
              </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-5xl md:text-6xl font-light text-stone-800 tracking-wider"
          style={{ fontFamily: 'serif' }}
        >
          {t.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm md:text-base text-stone-500 tracking-widest uppercase"
        >
          {t.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-20 h-px bg-stone-300" />
          <p className="text-sm md:text-base text-stone-600 max-w-md leading-relaxed">
            {t.subtitle}
          </p>
          <div className="w-20 h-px bg-stone-300" />
        </motion.div>

        <motion.button
        onClick={() => window.open("https://github.com/roynaldoktaviano", "_blank")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="group mt-8 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-all duration-300 flex items-center gap-2 mx-auto text-sm"
        >
          <span className="tracking-wider">{t.cta}</span>
          <Github className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="flex items-center gap-3 text-stone-400"
      >
        <div className="w-2 h-2 rounded-full border border-stone-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
        <div className="w-1 h-1 rounded-full bg-stone-300" />
      </motion.div>
    </div>
  );
}
