import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { content, Language } from '../constants';

interface HeroCarouselProps {
  lang: Language;
}

const sections = [
  { id: 'professional', key: 'professional', image: '/hero-professional.jpg', path: '/professional' },
  { id: 'cinema', key: 'cinema', image: '/hero-cinema.jpg', path: '/cinema' },
  { id: 'chronicles', key: 'chronicles', image: '/hero-chronicles.jpg', path: '/chronicles' },
];

export default function HeroCarousel({ lang }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setIndex((prev) => (prev + 1) % sections.length);
  const prev = () => setIndex((prev) => (prev - 1 + sections.length) % sections.length);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNavigate = () => {
    navigate(sections[index].path);
    window.scrollTo(0, 0);
  };

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[70vh] md:h-[90vh] w-full overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.div
          key={sections[index].id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 cursor-pointer"
          onClick={handleNavigate}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={sections[index].image}
            alt={sections[index].id}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (sections[index].id === 'professional') target.src = "https://picsum.photos/seed/work/1200/600";
              if (sections[index].id === 'cinema') target.src = "https://picsum.photos/seed/cinema/1200/600";
              if (sections[index].id === 'chronicles') target.src = "https://picsum.photos/seed/writing/1200/600";
            }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4 text-center">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-9xl font-display italic mb-6"
            >
              {content[lang].hero[sections[index].key as keyof typeof content['pt']['hero']].title}
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl max-w-2xl font-light tracking-wide opacity-90 mb-8"
            >
              {content[lang].hero[sections[index].key as keyof typeof content['pt']['hero']].description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all font-bold uppercase tracking-widest text-sm"
            >
              {lang === 'pt' ? 'Explorar' : 'Explore'}
              <ArrowRight size={18} />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 top-[60%] md:top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={18} className="md:w-8 md:h-8" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 top-[60%] md:top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={18} className="md:w-8 md:h-8" />
      </button>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
            className={`h-2 transition-all duration-300 rounded-full ${
              i === index ? 'w-12 bg-white' : 'w-3 bg-white/40'
            }`}
          />
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        onClick={scrollToContent}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-white/50 hover:text-white transition-colors flex flex-col items-center"
      >
        <ChevronDown size={32} />
      </motion.button>
    </div>
  );
}
