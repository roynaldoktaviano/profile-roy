'use client';

import { motion } from 'framer-motion';

interface AboutProps {
  language: 'en' | 'ja';
}

export default function About({ language }: AboutProps) {
  const content = {
    en: {
      title: 'About Me',
      intro: 'Hello, I am',
      name: 'Yamamoto Taro',
      description: `Digital creator passionate about blending traditional Japanese aesthetics with modern design principles.`,
      skills: ['Web Development', 'UI/UX Design', 'Creative Direction', 'Brand Identity'],
      philosophy: `My approach is rooted in the Japanese concept of "Ma" (間) - the negative space that gives meaning to form.`,
      years: '5+',
      yearsLabel: 'Years Experience'
    },
    ja: {
      title: '私について',
      intro: 'こんにちは、私は',
      name: '山本 太郎',
      description: `伝統的な日本の美学と現代的なデザイン原則を融合させることに情熱を持つデジタルクリエイターです。`,
      skills: ['ウェブ開発', 'UI/UXデザイン', 'クリエイティブディレクション', 'ブランドアイデンティティ'],
      philosophy: `私のアプローチは「間」という日本の概念に根ざしています。形に意味を与える「余白」。`,
      years: '5年以上',
      yearsLabel: 'の経験'
    }
  };

  const t = content[language];

  return (
    <div className="w-full space-y-4">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-stone-800" />
          <span className="text-xs tracking-widest text-stone-500 uppercase">01</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-stone-800" style={{ fontFamily: 'serif' }}>
          {t.title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden max-h-[300px]"
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-7xl text-stone-300 font-light">山</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg"
          >
            <span className="text-4xl md:text-5xl font-light text-stone-800">{t.years}</span>
            <div className="h-10 w-px bg-stone-300" />
            <p className="text-stone-600 text-sm">{t.yearsLabel}</p>
          </motion.div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-stone-500 text-xs mb-1">{t.intro}</p>
            <h3 className="text-xl md:text-2xl text-stone-800 mb-2" style={{ fontFamily: 'serif' }}>
              {t.name}
            </h3>
            <p className="text-stone-600 text-xs leading-relaxed">
              {t.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest text-stone-500 uppercase mb-2">
              {language === 'en' ? 'Skills' : 'スキル'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {t.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-4 border-l-2 border-stone-800 bg-stone-50 rounded-r-lg"
          >
            <p className="text-stone-600 italic leading-relaxed text-xs">
              {t.philosophy}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
