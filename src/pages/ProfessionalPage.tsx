import { motion } from 'motion/react';
import { content, Language } from '../constants';

interface ProfessionalPageProps {
  lang: Language;
}

export default function ProfessionalPage({ lang }: ProfessionalPageProps) {
  const data = content[lang].professional;

  return (
    <div className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h1 className="text-6xl font-display italic mb-8">{data.title}</h1>
        <div className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap mb-12 max-w-3xl">
          {data.summary}
        </div>
        <div className="h-1 w-24 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
      </motion.div>

      <div className="space-y-12 mb-24">
        {data.experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-xl border-l-4 border-zinc-900 dark:border-zinc-100"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h2>
                <p className="text-lg italic opacity-70">{exp.company}</p>
              </div>
              <p className="text-sm font-medium opacity-50 uppercase tracking-wider">{exp.period}</p>
            </div>
            
            <ul className="space-y-3">
              {exp.tasks.map((task, i) => (
                <li key={i} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  <p className="leading-relaxed">{task}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-20 border-t border-zinc-200 dark:border-zinc-800"
      >
        <h2 className="text-4xl font-display italic mb-12">{data.educationTitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{edu.degree}</h3>
              <p className="text-lg italic opacity-70">{edu.institution}</p>
              <p className="text-sm font-medium opacity-50 uppercase tracking-wider mt-4">{edu.period}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
