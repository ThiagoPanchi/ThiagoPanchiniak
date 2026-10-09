import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'pt';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-full border border-dark-border bg-dark-surface/90 px-3 py-1.5 text-xs font-medium text-text-primary transition-all duration-200 hover:border-accent-neon hover:text-accent-neon hover:shadow-[0_0_12px_rgba(0,255,136,0.25)] focus:outline-none"
      title={currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      aria-label="Toggle Language"
    >
      <Globe className="h-3.5 w-3.5 text-accent-neon" />
      <span className={currentLang === 'pt' ? 'font-bold text-accent-neon' : 'text-text-muted'}>PT</span>
      <span className="text-dark-border">/</span>
      <span className={currentLang === 'en' ? 'font-bold text-accent-neon' : 'text-text-muted'}>EN</span>
    </button>
  );
}
