'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ja';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      role: 'Creative Developer',
      name1: 'ROYNALD',
      name2: 'OKTAVIANO',
      desc: 'Bridging the gap between cutting-edge development and strategic digital marketing.',
      cta: 'Let\'s Talk',
      availability: 'Available for new projects'
    },
    ja: {
      role: 'クリエイティブ・開発者',
      name1: 'ロイナルド',
      name2: 'オクタビアーノ',
      desc: '最先端の開発と戦略的なデジタルマーケティングの架け橋。',
      cta: '話しましょう',
      availability: '新しいプロジェクト受付中'
    }
  };

  const t = content[language];

  return (
    // Background diubah jadi full biru dengan gradient halus
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden  px-6 md:px-12 lg:px-24">
      
      {/* Abstract Glowing Orbs (Biar background birunya nggak flat) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-black/20 rounded-full blur-[120px] -z-10" 
      />

      {/* Floating Elements (Glassmorphism effect) */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:flex absolute top-[20%] right-[15%] items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl text-white font-medium z-20"
      >
        <Code2 className="w-5 h-5 text-white" />
        <span>Next.js & PHP</span>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:flex absolute bottom-[25%] right-[25%] items-center gap-2 px-5 py-3 bg-black/30 backdrop-blur-md border border-white/10 text-white rounded-2xl shadow-2xl font-medium z-20"
      >
        <Globe className="w-5 h-5 text-white" />
        <span>Digital Growth</span>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center z-10 relative mt-12 md:mt-0">
        
        {/* Top Status Pill - Contrast adjusted */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-8 w-fit"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            <span className="text-xs font-semibold tracking-wider text-white uppercase">
              {t.availability}
            </span>
          </div>
        </motion.div>

        {/* Oversized Typography - Changed to White/Transparent */}
        <div className="flex flex-col mb-8 relative">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[8vw] leading-[0.9] font-black text-white tracking-tighter"
          >
            {t.name1}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[12vw] md:text-[8vw] leading-[0.9] font-black text-transparent text-stroke-white tracking-tighter ml-0 md:ml-12"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }} // Efek outline text (stroke)
          >
            {t.name2}
          </motion.h1>
          
          {/* Decorative Japanese Text - Opacity direndahin biar nge-blend sama biru */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute top-4 right-0 md:right-[20%] text-white/5 font-bold text-4xl md:text-8xl -z-10 select-none writing-vertical-rl"
            style={{ writingMode: 'vertical-rl' }}
          >
            開発者
          </motion.span>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-4xl"
        >
          {/* Subtitle text diubah jadi putih transparan */}
          <p className="text-white/80 text-lg md:text-xl font-medium max-w-md leading-relaxed">
            {t.desc}
          </p>

          <div className="flex items-center gap-6">
            {/* Tombol CTA dibalik jadi warna putih dengan teks biru */}
            <button
              onClick={() => window.open("https://github.com/roynaldoktaviano", "_blank")}
              className="group relative flex items-center gap-4 px-8 py-4 bg-white hover:bg-stone-100 text-[#3e5ba9] rounded-full transition-colors duration-500 overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 font-bold tracking-wide uppercase text-sm">
                {t.cta}
              </span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-[#3e5ba9]/10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight className="w-4 h-4 text-[#3e5ba9]" />
              </div>
            </button>
            
            {/* Small subtle logo */}
            <div className="w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center p-2 opacity-80 hover:opacity-100 transition-opacity">
              <img src="./log.png" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}