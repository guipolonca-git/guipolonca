import { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Sun, Moon, Languages, Instagram, Music, Film, PenTool, Mail, Home, Briefcase, User } from 'lucide-react';
import HeroCarousel from './components/HeroCarousel';
import ContactForm from './components/ContactForm';
import ProfessionalPage from './pages/ProfessionalPage';
import CinemaPage from './pages/CinemaPage';
import ChroniclesPage from './pages/ChroniclesPage';
import { content, Language } from './constants';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MobileNav({ lang }: { lang: Language }) {
  const location = useLocation();
  const [hidden, setHidden] = useState(true);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const isHomePage = location.pathname === '/';
    const threshold = isHomePage ? 500 : 100;
    setHidden(scrollY.get() < threshold);
  }, [location.pathname, scrollY]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isHomePage = location.pathname === '/';
    // Threshold to show nav: ~500px on home (after carousel), ~100px on other pages
    const threshold = isHomePage ? 500 : 100;

    if (latest < threshold) {
      setHidden(true);
    } else {
      if (latest > lastScrollY.current) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
    lastScrollY.current = latest;
  });

  const navItems = [
    { to: "/", icon: Home, label: content[lang].nav.home },
    { to: "/professional", icon: Briefcase, label: content[lang].nav.professional },
    { to: "/cinema", icon: Film, label: content[lang].nav.cinema },
    { to: "/chronicles", icon: PenTool, label: content[lang].nav.chronicles },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: 100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md md:hidden"
    >
      <div className="bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-full py-3 px-6 flex justify-between items-center shadow-2xl">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-white' : 'text-zinc-500'
              }`}
            >
              <item.icon size={20} />
              <span className="text-[10px] uppercase font-bold tracking-tighter">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}

function MainContent({ lang }: { lang: Language }) {
  return (
    <main className="pt-16">
      <HeroCarousel lang={lang} />

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/profile.jpg" 
              alt="Guilherme Polonca" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/guilherme/800/800";
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-display italic leading-tight">
              {content[lang].about.title}
            </h2>
            <div className="h-1 w-20 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
            <p className="text-lg md:text-xl leading-relaxed opacity-80 font-light">
              {content[lang].about.text}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={content[lang].social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform" title="Instagram">
                <Instagram size={20} />
              </a>
              <a href={content[lang].social.tiktok} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform" title="TikTok">
                <TikTokIcon size={20} />
              </a>
              <a href={content[lang].social.cinema} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform" title="Crítica Cinematográfica">
                <Film size={20} />
              </a>
              <a href={content[lang].social.medium} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform" title="Medium">
                <PenTool size={20} />
              </a>
              <a href="mailto:guipolonca@gmail.com" className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-2xl hover:scale-110 transition-transform" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactForm lang={lang} />
    </main>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('pt');

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  return (
    <Router>
      <ScrollToTop />
      <MobileNav lang={lang} />
      <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-zinc-800 transition-colors duration-300">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg bg-black/70 border-b border-zinc-800">
          <Link to="/" className="flex items-center gap-2">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-display italic tracking-tighter"
            >
              Guilherme Polonca
            </motion.h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
            <Link to="/professional" className="hover:opacity-100 transition-opacity">{content[lang].nav.professional}</Link>
            <Link to="/cinema" className="hover:opacity-100 transition-opacity">{content[lang].nav.cinema}</Link>
            <Link to="/chronicles" className="hover:opacity-100 transition-opacity">{content[lang].nav.chronicles}</Link>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors flex items-center gap-2 text-sm font-medium"
              title={lang === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
            >
              <Languages size={18} />
              <span className="uppercase">{lang}</span>
            </button>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<MainContent lang={lang} />} />
          <Route path="/professional" element={<ProfessionalPage lang={lang} />} />
          <Route path="/cinema" element={<CinemaPage lang={lang} />} />
          <Route path="/chronicles" element={<ChroniclesPage lang={lang} />} />
        </Routes>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-zinc-800 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Guilherme Polonca. {content[lang].footer.rights}
          </p>
        </footer>
      </div>
    </Router>
  );
}
