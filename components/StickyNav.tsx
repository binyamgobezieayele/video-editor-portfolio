import React, { useState, useEffect, useRef } from 'react';
import { HomeIcon, BriefcaseIcon, VideoCameraIcon, EnvelopeIcon } from './icons/IconComponents';

const NAV_ITEMS = [
  { id: 'home', icon: <HomeIcon className="w-5 h-5" />, label: 'Home' },
  { id: 'services', icon: <VideoCameraIcon className="w-5 h-5" />, label: 'Services' },
  { id: 'portfolio', icon: <BriefcaseIcon className="w-5 h-5" />, label: 'Portfolio' },
  { id: 'contact', icon: <EnvelopeIcon className="w-5 h-5" />, label: 'Contact' },
];

const StickyNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollPosition = window.scrollY + 250;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
      aria-label="Quick navigation bar"
    >
      <div className="bg-primary/90 dark:bg-[#111420]/90 backdrop-blur-lg rounded-full shadow-xl shadow-black/20 border border-border-default dark:border-white/10 p-1.5 flex items-center gap-1">
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={`px-3.5 py-2 flex items-center gap-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeSection === item.id 
                ? 'bg-sky-600 text-white shadow-sm' 
                : 'text-text-secondary dark:text-slate-400 hover:text-text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
            }`}
            aria-label={`Jump to ${item.label}`}
          >
            {item.icon}
            <span className="hidden sm:inline">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default StickyNav;
