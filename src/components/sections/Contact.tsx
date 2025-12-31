'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ja';
}

export default function Contact({ language }: ContactProps) {
  const content = {
    en: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      description: `Always open to discussing new projects and creative ideas.`,
      email: 'hello@yamamoto.design',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message'
      },
      socials: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
    },
    ja: {
      title: '連絡先',
      subtitle: 'お問い合わせ',
      description: `新しいプロジェクトやクリエイティブなアイデアについていつでも話しかけてください。`,
      email: 'hello@yamamoto.design',
      form: {
        name: 'お名前',
        email: 'メールアドレス',
        message: 'メッセージ',
        submit: '送信'
      },
      socials: {
        github: 'GitHub',
        linkedin: 'LinkedIn',
        twitter: 'Twitter'
      }
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
          <span className="text-xs tracking-widest text-stone-500 uppercase">03</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light text-stone-800" style={{ fontFamily: 'serif' }}>
          {t.title}
        </h2>
        <p className="text-stone-600 text-xs max-w-2xl leading-relaxed">
          {t.description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-4 bg-stone-50 rounded-lg"
          >
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-stone-600 mt-0.5" />
              <div>
                <p className="text-xs tracking-widest text-stone-500 uppercase mb-1">
                  {language === 'en' ? 'Email' : 'メール'}
                </p>
                <a
                  href={`mailto:${t.email}`}
                  className="text-base text-stone-800 hover:text-stone-600 transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-xs tracking-widest text-stone-500 uppercase">
              {language === 'en' ? 'Follow Me' : 'フォローする'}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-stone-100 hover:bg-stone-800 hover:text-white text-stone-600 rounded-full transition-all duration-300"
                aria-label={t.socials.github}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-stone-100 hover:bg-stone-800 hover:text-white text-stone-600 rounded-full transition-all duration-300"
                aria-label={t.socials.linkedin}
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-stone-100 hover:bg-stone-800 hover:text-white text-stone-600 rounded-full transition-all duration-300"
                aria-label={t.socials.twitter}
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-stone-400"
          >
            <span className="text-3xl">連</span>
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-3xl">絡</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs text-stone-600 mb-1">
                {t.form.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-800 transition-colors text-sm"
                placeholder={t.form.name}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-stone-600 mb-1">
                {t.form.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-800 transition-colors text-sm"
                placeholder={t.form.email}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-stone-600 mb-1">
                {t.form.message}
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-3 py-2 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-800 transition-colors resize-none text-sm"
                placeholder={t.form.message}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
            >
              <span>{t.form.submit}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="pt-4 border-t border-stone-200"
      >
        <p className="text-center text-stone-500 text-xs">
          {language === 'en'
            ? '© 2024 Yamamoto Taro. All rights reserved.'
            : '© 2024 山本 太郎. すべての権利を保有しています。'}
        </p>
      </motion.div>
    </div>
  );
}
