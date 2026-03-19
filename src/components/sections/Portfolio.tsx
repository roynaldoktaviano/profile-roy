'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowRight, Layout } from 'lucide-react';

interface PortfolioProps {
  language: 'en' | 'ja';
}

export default function Portfolio({ language }: PortfolioProps) {
  const content = {
    en: {
      tag: 'PORTFOLIO',
      title: 'Selected Works',
      subtitle: 'A selection of my recent work, built with performance and user experience in mind.',
      projects: [
        {
          title: 'Orchid Tent',
          category: 'E-Commerce',
          description: 'A minimalist website showcasing orchid tent products with a seamless user experience.',
          tags: ['WordPress', 'PHP', 'Figma'],
          image : './porto-orchid.jpg',
          link: 'https://orchid.id'
        },
        {
          title: 'PT Colossal Art',
          category: 'Web Design',
          description: 'Modern and minimalist website design for a leading construction and architect company.',
          tags: ['Figma', 'UI/UX'],
          image : './porto-colo.jpg',
          link: 'https://dribbble.com/shots/22839524-Colossal-Art-Construction-Architect-UI-Website'
        },
        {
          title: 'Invite You',
          category: 'Web App',
          description: 'Digital platform and interactive Invitation System for birthday and wedding events.',
          tags: ['Next.js', 'TailwindCSS'],
          image : './porto-inv.jpg',
          link: 'https://inviteyouinvitation.com/'
        }
      ],
      viewProject: 'Live Preview',
      viewAll: 'Explore All Projects'
    },
    ja: {
      tag: 'ポートフォリオ',
      title: '選ばれた作品',
      subtitle: 'パフォーマンスとユーザー体験を念頭に置いて構築された、最近の作品のセレクション。',
      projects: [
        {
          title: 'オーキッドテント',
          category: 'Eコマース',
          description: 'オーキッドテント製品を紹介する、シームレスなUIを持つミニマルなサイト。',
          tags: ['WordPress', 'PHP', 'Figma'],
          image : './porto-orchid.jpg',
          link: 'https://orchid.id'
        },
        {
          title: 'コロッサル・アート',
          category: 'デザイン',
          description: '建設・建築会社向けのモダンでミニマルなウェブサイトデザイン。',
          tags: ['Figma', 'UI/UX'],
          image : './porto-colo.jpg',
          link: 'https://dribbble.com/shots/22839524-Colossal-Art-Construction-Architect-UI-Website'
        },
        {
          title: 'Invite You',
          category: 'ウェブアプリ',
          description: '誕生日や結婚式イベント向けのデジタルプラットフォームおよびインタラクティブな招待状システム。',
          tags: ['Next.js', 'TailwindCSS'],
          image : './porto-inv.jpg',
          link: 'https://inviteyouinvitation.com/'
        }
      ],
      viewProject: 'ライブプレビュー',
      viewAll: 'すべてのプロジェクトを見る'
    }
  };

  const t = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
   
    <div className="w-full  max-w-7xl mx-auto h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-8 md:mb-10" // Margin bottom dikurangi
      >
        <div className="flex items-center gap-4 mb-3">
          <div className="w-12 h-px bg-white/30" />
          <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">02 / {t.tag}</span>
          <div className="w-12 h-px bg-white/30" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
          {t.title}
        </h2>
        <p className="text-white/70 max-w-2xl text-xs md:text-sm font-medium leading-relaxed">
          {t.subtitle}
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" // Gap dikurangi dikit
      >
        {t.projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="group flex flex-col bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-[2rem] p-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image Frame */}
            <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-4 bg-stone-900">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
              />
              
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white border border-white/20">
                <Layout className="w-3 h-3 text-yellow-300" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{project.category}</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-grow px-3 pb-3">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tags / Skills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-white text-[#3e5ba9] rounded-full text-[9px] md:text-[10px] font-bold tracking-wide shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={() => window.open(project.link, '_blank')}
                className="w-full py-2.5 bg-transparent border border-white/30 group-hover:border-white group-hover:bg-white text-white group-hover:text-[#3e5ba9] rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300"
              >
                <span>{t.viewProject}</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center pb-8" // Margin top dikurangi
      >
        <button 
          onClick={() => window.open('https://github.com/roynaldoktaviano', '_blank')} 
          className="group flex items-center gap-3 px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300"
        >
          {t.viewAll}
          <div className="w-5 h-5 rounded-full bg-white text-[#3e5ba9] flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowRight className="w-3 h-3" />
          </div>
        </button>
      </motion.div>

    </div>
  );
}