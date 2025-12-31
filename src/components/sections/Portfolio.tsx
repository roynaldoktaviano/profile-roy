'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface PortfolioProps {
  language: 'en' | 'ja';
}

export default function Portfolio({ language }: PortfolioProps) {
  const content = {
    en: {
      title: 'Portfolio',
      subtitle: 'Selected Works',
      projects: [
        {
          title: 'Zen Garden',
          category: 'Web Design',
          description: 'A minimalist website showcasing traditional Japanese gardens.',
          tags: ['React', 'TypeScript', 'Framer Motion']
        },
        {
          title: 'Matcha Studio',
          category: 'E-commerce',
          description: 'Modern e-commerce platform for premium matcha products.',
          tags: ['Next.js', 'Stripe', 'Tailwind CSS']
        },
        {
          title: 'Hanko Identity',
          category: 'Branding',
          description: 'Brand identity featuring traditional Japanese seal design.',
          tags: ['Illustrator', 'Figma', 'Adobe XD']
        }
      ],
      viewProject: 'View Project',
      viewCode: 'View Code'
    },
    ja: {
      title: '作品集',
      subtitle: '選ばれた作品',
      projects: [
        {
          title: '禅庭',
          category: 'ウェブデザイン',
          description: '伝統的な日本庭園を紹介するミニマリストウェブサイト。',
          tags: ['React', 'TypeScript', 'Framer Motion']
        },
        {
          title: '抹茶スタジオ',
          category: 'Eコマース',
          description: 'プレミアム抹茶製品のためのモダンなEコマースプラットフォーム。',
          tags: ['Next.js', 'Stripe', 'Tailwind CSS']
        },
        {
          title: '判子アイデンティティ',
          category: 'ブランディング',
          description: '伝統的な日本の印章デザイン原則を取り入れたブランドアイデンティティ。',
          tags: ['Illustrator', 'Figma', 'Adobe XD']
        }
      ],
      viewProject: 'プロジェクトを見る',
      viewCode: 'コードを見る'
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
          <span className="text-xs tracking-widest text-stone-500 uppercase">02</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-stone-800" style={{ fontFamily: 'serif' }}>
          {t.title}
        </h2>
        <p className="text-stone-500 text-sm">{t.subtitle}</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        {t.projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="space-y-2">
              <div className="aspect-video bg-stone-100 rounded-lg overflow-hidden group-hover:bg-stone-200 transition-colors">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl text-stone-300 font-light group-hover:scale-110 transition-transform duration-500">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs tracking-widest text-stone-500 uppercase">
                  {project.category}
                </span>

                <h3 className="text-lg text-stone-800 group-hover:text-stone-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-stone-50 text-stone-600 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-full text-xs transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    <span>{t.viewProject}</span>
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-stone-300 hover:border-stone-400 text-stone-700 rounded-full text-xs transition-colors">
                    <Github className="w-3 h-3" />
                    <span>{t.viewCode}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center pt-4"
      >
        <button className="px-6 py-2 border border-stone-800 hover:bg-stone-800 hover:text-white text-stone-800 rounded-full transition-all duration-300 text-xs tracking-wider">
          {language === 'en' ? 'View All Projects' : 'すべてのプロジェクトを見る'}
        </button>
      </motion.div>
    </div>
  );
}
