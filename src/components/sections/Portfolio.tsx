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
          title: 'Orchid Tent',
          category: 'Website Profile',
          description: 'A minimalist website showcasing orchid tent products.',
          tags: ['WordPress', 'PHP', 'Figma'],
          image : './porto-orchid.jpg',
          link: 'https://orchid.id'
        },
        {
          title: 'PT Colossal Art',
          category: 'Website Design',
          description: 'Modern and minimalist website for an construction company.',
          tags: ['Figma'],
          image : './porto-colo.jpg',
          link: 'https://dribbble.com/shots/22839524-Colossal-Art-Construction-Architect-UI-Website'
        },
        {
          title: 'Invite You',
          category: 'Website Profile',
          description: 'Website and Invitation System for birthday and wedding event',
          tags: ['NextJS', 'HTML', 'TailwindCSS'],
          image : './porto-inv.jpg',
          link: 'https://inviteyouinvitation.com/'
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
          tags: ['React', 'TypeScript', 'Framer Motion'],
          image : './portfolio-1.png'
        },
        {
          title: '抹茶スタジオ',
          category: 'Eコマース',
          description: 'プレミアム抹茶製品のためのモダンなEコマースプラットフォーム。',
          tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
          image : './portfolio-1.png'
        },
        {
          title: '判子アイデンティティ',
          category: 'ブランディング',
          description: '伝統的な日本の印章デザイン原則を取り入れたブランドアイデンティティ。',
          tags: ['Illustrator', 'Figma', 'Adobe XD'],
          image : './portfolio-1.png'
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

      <div className="grid md:flex gap-4 md:gap-10 md:justify-between">
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
              <div className="aspect-video  bg-cover h-[10vw]  rounded-lg overflow-hidden group-hover:bg-stone-200 transition-colors" style={{ backgroundImage: `url(${project.image})` }}>
          
              </div>

              <div className="space-y-1 mt-5">
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
                  <button 
                  onClick={() => window.open(`${project.link}`, '_blank')}
                  className="flex items-center gap-1 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-full text-xs transition-colors">
                    <ExternalLink className="w-3 h-3" />
                    <span>{t.viewProject}</span>
                  </button>
                  {/* <button className="flex items-center gap-1 px-3 py-1.5 border border-stone-300 hover:border-stone-400 text-stone-700 rounded-full text-xs transition-colors">
                    <Github className="w-3 h-3" />
                    <span>{t.viewCode}</span>
                  </button> */}
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
        <button onClick={() => window.open('https://github.com/roynaldoktaviano', '_blank')} className="px-6 py-2 border border-stone-800 hover:bg-stone-800 hover:text-white text-stone-800 rounded-full transition-all duration-300 text-xs tracking-wider">
          {language === 'en' ? 'View All Projects' : 'すべてのプロジェクトを見る'}
        </button>
      </motion.div>
    </div>
  );
}
