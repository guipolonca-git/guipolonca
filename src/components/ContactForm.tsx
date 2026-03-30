import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { content, Language } from '../constants';

interface ContactFormProps {
  lang: Language;
}

export default function ContactForm({ lang }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration is missing');
      setStatus('error');
      return;
    }

    try {
      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === 'OK') {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-zinc-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-zinc-800"
      >
        <h2 className="text-4xl font-display italic mb-8 text-center">
          {content[lang].contact.title}
        </h2>

        {status === 'success' ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-16 h-16 bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-medium">{content[lang].contact.success}</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm underline opacity-60 hover:opacity-100"
            >
              {lang === 'pt' ? 'Enviar outra' : 'Send another'}
            </button>
          </motion.div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold opacity-60">
                  {content[lang].contact.name}
                </label>
                <input
                  required
                  name="user_name"
                  type="text"
                  className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-zinc-400 outline-none transition-all text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-semibold opacity-60">
                  {content[lang].contact.email}
                </label>
                <input
                  required
                  name="user_email"
                  type="email"
                  className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-zinc-400 outline-none transition-all text-white"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-semibold opacity-60">
                {content[lang].contact.message}
              </label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full bg-zinc-800 border-none rounded-xl p-4 focus:ring-2 focus:ring-zinc-400 outline-none transition-all resize-none text-white"
              />
            </div>
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                {lang === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Error sending. Try again.'}
              </p>
            )}
            <button
              disabled={status === 'sending'}
              className="w-full bg-zinc-100 text-zinc-900 font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
            >
              {status === 'sending' ? '...' : content[lang].contact.send}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
