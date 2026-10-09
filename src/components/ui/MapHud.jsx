import React from 'react';
import { useTranslation } from 'react-i18next';
import { Compass, RotateCcw, MousePointerClick, ZoomIn } from 'lucide-react';

export default function MapHud({ activeIsland, onNavigate, onResetOverview }) {
  const { t } = useTranslation();

  const currentIslandTitle = activeIsland === 'aboutCity'
    ? t('ui.breadcrumbCity')
    : activeIsland === 'overview'
    ? t('nav.overview')
    : t(`islands.${activeIsland}.title`, { defaultValue: activeIsland });

  const currentIslandSubtitle = activeIsland === 'aboutCity'
    ? t('islands.about.pois.village.summary')
    : activeIsland === 'overview'
    ? t('ui.exploreMap')
    : t(`islands.${activeIsland}.subtitle`, { defaultValue: '' });

  return (
    <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-20 flex justify-center px-3 md:bottom-6 md:left-80 md:px-4">
      <div className="pointer-events-auto flex max-w-[calc(100vw-1.5rem)] flex-col items-center gap-2 rounded-2xl border border-dark-border/80 bg-dark-bg/85 px-4 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md sm:px-5 md:flex-row md:gap-6">
        {/* Island Info Badge */}
        <div className="flex items-center gap-3 text-left">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent-neon/30 bg-dark-surface text-accent-neon shadow-[0_0_10px_rgba(0,255,136,0.2)]">
            <Compass className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-text-primary uppercase tracking-wider font-mono">
              {currentIslandTitle}
            </div>
            <div className="text-[11px] text-text-muted">
              {currentIslandSubtitle}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="hidden h-7 w-px bg-dark-border/70 md:block" />

        {/* Tips & Actions */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-text-muted md:gap-4">
          <span className="hidden items-center gap-1.5 lg:flex">
            <MousePointerClick className="h-3.5 w-3.5 text-accent-neon" />
            <span>{t('ui.clickPoiHint')}</span>
          </span>

          {activeIsland === 'about' && (
            <button
              onClick={() => onNavigate('aboutCity')}
              className="flex items-center gap-1.5 rounded-lg border border-accent-neon/50 bg-emerald-950/30 px-2.5 py-1 text-[11px] font-medium text-accent-neon transition-all hover:border-accent-neon hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] sm:px-3 sm:text-xs"
            >
              <ZoomIn className="h-3 w-3" />
              <span>{t('ui.cityZoom')}</span>
            </button>
          )}

          {activeIsland === 'aboutCity' && (
            <button
              onClick={() => onNavigate('about')}
              className="flex items-center gap-1.5 rounded-lg border border-accent-neon/50 bg-emerald-950/30 px-2.5 py-1 text-[11px] font-medium text-accent-neon transition-all hover:border-accent-neon hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] sm:px-3 sm:text-xs"
            >
              <RotateCcw className="h-3 w-3" />
              <span>{t('ui.backToIsland')}</span>
            </button>
          )}

          {activeIsland !== 'overview' && (
            <button
              onClick={onResetOverview}
              className="flex items-center gap-1.5 rounded-lg border border-dark-border bg-dark-surface px-2.5 py-1 text-[11px] font-medium text-text-primary transition-all hover:border-accent-neon hover:text-accent-neon hover:shadow-[0_0_10px_rgba(0,255,136,0.2)] sm:px-3 sm:text-xs"
            >
              <RotateCcw className="h-3 w-3 text-accent-neon" />
              <span>{t('nav.overview')}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
