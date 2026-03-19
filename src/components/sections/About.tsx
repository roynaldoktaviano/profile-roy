'use client';

import { motion } from 'framer-motion';
import { Sparkles, Code2 } from 'lucide-react'; // Ikon yang ga kepakai udah dibuang

interface AboutProps {
  language: 'en' | 'ja';
}

export default function About({ language }: AboutProps) {
  const content = {
    en: {
      tag: 'GET TO KNOW ME',
      title: "Hey, I'm Roynald! 👋",
      description: "I build fast, scalable websites that don't just look good, but actually perform. Blending clean code with killer digital strategies.",
      skillsTitle: 'TECH & STACK',
      skills: ['Web Dev', 'Next.js & PHP', 'UI/UX', 'Digital Marketing'],
      philosophyTitle: 'MINDSET',
      philosophy: `Shoshin (初心) — Keeping a beginner's mind. Always curious, always learning.`,
      years: '5+',
      yearsText: 'Years Exp'
    },
    ja: {
      tag: '私について',
      title: "こんにちは、ロイナルドです！👋",
      description: "見た目が良いだけでなく、実際に機能する、高速でスケーラブルなウェブサイトを構築します。クリーンなコードと戦略を融合させます。",
      skillsTitle: '技術とスタック',
      skills: ['Web開発', 'Next.js & PHP', 'UI/UX', 'マーケティング'],
      philosophyTitle: 'マインドセット',
      philosophy: `「初心」— 常に初心を忘れず、好奇心を持ち、学び続けること。`,
      years: '5+',
      yearsText: '年の経験'
    }
  };

  const t = content[language];

  // Efek animasi masuk berurutan
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    // Posisikan overflow-y-auto dan h-full biar gampang di-scroll di layar kecil kalau butuh
    <div className="w-full py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-auto"
      >
        
        {/* BENTO 1: Intro Card */}
        <motion.div variants={itemVariants} className="md:col-span-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 group-hover:bg-white/10 transition-colors duration-700" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 w-fit mb-4 md:mb-6 border border-white/10">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
            {t.tag}
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-3 md:mb-4">
            {t.title}
          </h2>
          <p className="text-white/80 text-base md:text-xl font-medium leading-relaxed max-w-2xl">
            {t.description}
          </p>
        </motion.div>

        {/* BENTO 2: Photo Card (Sekarang pakai md:row-span-2 biar memanjang ke bawah!) */}
        <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-2 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group min-h-[350px] md:min-h-full">
          <img 
            src="./profil.png" 
            alt="Roynald" 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3e5ba9]/90 via-[#3e5ba9]/20 to-transparent opacity-80 md:opacity-60 group-hover:opacity-40 transition-opacity" />
          
          {/* Badge Pengalaman */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex flex-col items-center justify-center shadow-2xl md:group-hover:rotate-12 transition-transform duration-500 cursor-default z-10">
            <span className="text-2xl md:text-4xl font-black text-white drop-shadow-md">{t.years}</span>
            <span className="text-[8px] md:text-[10px] font-bold text-white uppercase tracking-widest text-center leading-tight">
              {t.yearsText}
            </span>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute inset-1.5 md:inset-2 border border-dashed border-white/50 rounded-full"
            />
          </div>
        </motion.div>

        {/* BENTO 3: Tech Stack */}
        <motion.div variants={itemVariants} className="md:col-span-4 bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 shadow-xl md:hover:-translate-y-2 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-4 md:mb-6 text-[#3e5ba9]">
            <Code2 className="w-4 h-4 md:w-5 md:h-5" />
            <h3 className="text-xs md:text-sm font-black tracking-widest uppercase">
              {t.skillsTitle}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {t.skills.map((skill) => (
              <span key={skill} className="px-3 py-1.5 md:px-4 md:py-2 bg-[#3e5ba9]/10 text-[#3e5ba9] rounded-xl text-xs md:text-sm font-bold border border-[#3e5ba9]/20">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* BENTO 4: Philosophy Card */}
        <motion.div variants={itemVariants} className="md:col-span-4 border-2 border-white/30 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group md:hover:bg-white/5 transition-colors duration-300">
          <h3 className="text-xs md:text-sm font-black tracking-widest uppercase text-white/50 mb-3 md:mb-4 z-10">
            {t.philosophyTitle}
          </h3>
          <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed italic z-10">
            "{t.philosophy}"
          </p>
          <span className="absolute -right-4 -bottom-4 text-7xl md:text-8xl font-black text-white/5 select-none md:group-hover:scale-110 transition-transform duration-500">
            初心
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
}