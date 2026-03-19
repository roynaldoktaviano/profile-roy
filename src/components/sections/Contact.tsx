'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Dribbble, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ja';
}

export default function Contact({ language }: ContactProps) {
  const content = {
    en: {
      tag: 'CONTACT',
      title: 'Get in Touch',
      description: `Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.`,
      email: 'roynald.okta@gmail.com',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message'
      },
      socials: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Dribbble'
      }
    },
    ja: {
      tag: '連絡先',
      title: 'お問い合わせ',
      description: `新しいプロジェクト、クリエイティブなアイデア、またはあなたのビジョンの一部になる機会について、いつでも話し合いましょう。`,
      email: 'roynald.okta@gmail.com',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        submit: '送信'
      },
      socials: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Dribbble'
      }
    }
  };

  const t = content[language];

  return (
    <div className="w-full py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/5 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-white/70 border border-white/10 mb-6">
          <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-yellow-300" />
          03 / {t.tag}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          {t.title}
        </h2>
        <p className="text-white/70 max-w-xl text-sm md:text-base font-medium leading-relaxed">
          {t.description}
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: Contact Info & Socials */}
        <div className="space-y-8">
          
          {/* Email Card (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[1.5rem] hover:bg-white/10 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-full text-white">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-1">
                  {language === 'en' ? 'Email' : 'メール'}
                </p>
                <a
                  href={`mailto:${t.email}`}
                  className="text-base md:text-lg font-bold text-white hover:text-yellow-300 transition-colors break-all"
                >
                  {t.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 p-6"
          >
            <p className="text-xs font-bold tracking-widest text-white/50 uppercase">
              {language === 'en' ? 'Follow Me' : 'フォローする'}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/roynaldoktaviano/"
                target='_blank'
                className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-[#3e5ba9] text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label={t.socials.github}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/roynald-oktaviano-852508191/"
                target='_blank'
                className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-[#3e5ba9] text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label={t.socials.linkedin}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com/roynaldoktaviano"
                target='_blank'
                className="p-3 bg-white/5 border border-white/10 hover:bg-white hover:text-[#3e5ba9] text-white rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                aria-label={t.socials.twitter}
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Decorative Kanji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 text-white/20 select-none px-6"
          >
            <span className="text-3xl font-black">連</span>
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-3xl font-black">絡</span>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem]"
        >
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">
                {t.form.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all text-white placeholder:text-white/30 text-sm font-medium"
                placeholder={t.form.name}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">
                {t.form.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all text-white placeholder:text-white/30 text-sm font-medium"
                placeholder={t.form.email}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">
                {t.form.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all resize-none text-white placeholder:text-white/30 text-sm font-medium"
                placeholder={t.form.message}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 mt-2 bg-white hover:bg-gray-100 text-[#3e5ba9] font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-sm uppercase tracking-widest shadow-xl"
            >
              <span>{t.form.submit}</span>
              <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer / Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 md:mt-10 pt-8 border-t border-white/10"
      >
        <p className="text-center text-white/40 text-xs font-medium tracking-wide">
          {language === 'en'
            ? '© 2026 Roynald Oktaviano. Built with Next.js & Tailwind.'
            : '© 2026 ロイナルド・オクタビアーノ. すべての権利を保有しています。'}
        </p>
      </motion.div>
    </div>
  );
}