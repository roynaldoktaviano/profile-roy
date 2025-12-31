'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ja';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      name: 'Yamamoto Taro',
      role: 'Digital Creator',
      subtitle: 'Crafting digital experiences with Japanese aesthetics',
      cta: 'Explore Work'
    },
    ja: {
      name: '山本 太郎',
      role: 'デジタルクリエイター',
      subtitle: '日本の美学でデジタル体験を創造',
      cta: '作品を見る'
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
            <span className="text-3xl font-light text-stone-800">和</span>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="group mt-8 px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-all duration-300 flex items-center gap-2 mx-auto text-sm"
        >
          <span className="tracking-wider">{t.cta}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
