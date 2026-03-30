import { motion } from 'motion/react';
import { content, Language } from '../constants';

interface ChroniclesPageProps {
  lang: Language;
}

export default function ChroniclesPage({ lang }: ChroniclesPageProps) {
  const data = content[lang].chronicles;

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-6xl font-display italic mb-8">{data.title}</h1>
        {data.description && (
          <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap mb-12 max-w-3xl">
            {data.description}
          </div>
        )}
        <div className="h-1 w-24 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
      </motion.div>

      <div className="space-y-20">
        {data.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border-b border-zinc-200 dark:border-zinc-800 pb-16 last:border-none last:pb-0"
          >
            <p className="text-xs uppercase tracking-widest font-semibold opacity-50 mb-4">{item.date}</p>
            <h2 className="text-5xl font-display italic leading-tight mb-6">{item.title}</h2>
            <p className="text-xl leading-relaxed opacity-80 font-light italic mb-8">
              {item.text}
            </p>
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest border-b-2 border-zinc-900 dark:border-zinc-100 pb-1 hover:opacity-70 transition-opacity inline-block"
            >
              {lang === 'pt' ? 'Continuar lendo' : 'Continue reading'}
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <a 
          href={data.platformLink}
          className="inline-flex items-center gap-3 px-10 py-5 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-full font-display italic text-2xl hover:bg-zinc-900 dark:hover:bg-zinc-100 hover:text-white dark:hover:text-zinc-900 transition-all duration-300"
        >
          {data.platformLabel}
        </a>
      </motion.div>
    </div>
  );
}
