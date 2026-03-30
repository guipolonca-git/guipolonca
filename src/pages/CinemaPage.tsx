import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { content, Language } from '../constants';

interface CinemaPageProps {
  lang: Language;
}

export default function CinemaPage({ lang }: CinemaPageProps) {
  const data = content[lang].cinema;

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-6xl font-display italic mb-8">{data.title}</h1>
        <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap mb-12 max-w-3xl">
          {data.description}
        </div>
        <div className="h-1 w-24 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
      </motion.div>

      <div className="grid gap-20">
        {data.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            <div className="w-full md:w-1/2 relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-display italic leading-tight">{item.title}</h2>
              <p className="text-lg leading-relaxed opacity-80 font-light">{item.text}</p>
              <a 
                href={item.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-bold hover:scale-105 transition-transform"
              >
                {lang === 'pt' ? 'Ler mais' : 'Read more'}
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 flex flex-col md:flex-row justify-center gap-6"
      >
        {data.platforms.map((platform, index) => (
          <a 
            key={index}
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-full font-display italic text-xl hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
          >
            {platform.label}
            <ExternalLink size={20} />
          </a>
        ))}
      </motion.div>
    </div>
  );
}
