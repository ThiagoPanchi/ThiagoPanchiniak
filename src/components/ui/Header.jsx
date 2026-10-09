import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, User, Briefcase, FolderGit2, Mail, Menu, X, MapPin } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

export default function Header({
  activeIsland,
  onNavigate,
  isSidebarOpen,
  onToggleSidebar
}) {
  const { t } = useTranslation();

  const navItems = [
    { id: 'overview', label: t('nav.overview'), icon: Compass },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'resume', label: t('nav.resume'), icon: Briefcase },
    { id: 'portfolio', label: t('nav.portfolio'), icon: FolderGit2 },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex h-16 items-center justify-between border-b border-dark-border/80 bg-dark-bg/85 px-4 md:px-8 backdrop-blur-md">
      {/* Brand & Mobile Hamburger */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-border bg-dark-surface text-text-primary hover:border-accent-neon hover:text-accent-neon md:hidden"
          aria-label="Abrir Menu Lateral"
        >
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <button
          onClick={() => onNavigate('overview')}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent-neon/40 bg-dark-surface text-accent-neon transition-transform group-hover:scale-105 shadow-[0_0_12px_rgba(0,255,136,0.15)]">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-wider text-text-primary transition-colors group-hover:text-accent-neon">
              THIAGO PANCHINIAK
            </div>
            <div className="text-[10px] tracking-widest text-accent-emerald font-mono uppercase">
              GIS • DATA • AI
            </div>
          </div>
        </button>
      </div>

      {/* Center Navigation Bar (Desktop) */}
      <nav className="hidden items-center gap-1.5 rounded-full border border-dark-border bg-dark-surface/90 p-1 md:flex shadow-inner">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeIsland === item.id || (activeIsland === 'aboutCity' && item.id === 'about');
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 focus:outline-none ${
                isActive
                  ? 'border border-accent-neon/50 bg-dark-card text-accent-neon shadow-[0_0_12px_rgba(0,255,136,0.25)]'
                  : 'text-text-muted hover:text-text-primary hover:bg-dark-hover/60'
              }`}
            >
              <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-accent-neon' : 'text-text-muted'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right Tools (Language Switcher) */}
      <div className="flex items-center gap-3">
        <LanguageToggle />
      </div>
    </header>
  );
}
