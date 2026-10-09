import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  X,
  ExternalLink,
  Calendar,
  Building,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ModalDetail({ poiId, onClose }) {
  const { t } = useTranslation();

  // Find POI data in islands content
  const poiData = React.useMemo(() => {
    if (!poiId) return null;
    const islands = ['about', 'resume', 'portfolio', 'contact'];
    for (const islandKey of islands) {
      const poi = t(`islands.${islandKey}.pois.${poiId}`, { returnObjects: true });
      if (poi && typeof poi === 'object' && poi.title) {
        return { ...poi, islandKey, id: poiId };
      }
    }
    return null;
  }, [poiId, t]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!poiData) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md transition-opacity duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-accent-neon/40 bg-dark-bg/95 p-6 shadow-[0_0_35px_rgba(0,255,136,0.18)] backdrop-blur-xl md:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg border border-dark-border bg-dark-surface text-text-muted transition-colors hover:border-accent-neon hover:text-accent-neon"
          aria-label={t('ui.close')}
        >
          <X className="h-5 w-5" />
        </button>

        {/* Category Header */}
        <div className="mb-2 flex items-center gap-2 text-xs font-mono font-medium text-accent-neon tracking-wider uppercase">
          <Sparkles className="h-3.5 w-3.5 text-accent-neon" />
          <span>{poiData.category || t(`islands.${poiData.islandKey}.title`)}</span>
        </div>

        {/* Main Title */}
        <h2 className="text-xl font-bold text-text-primary md:text-2xl">
          {poiData.title}
        </h2>

        {/* Company & Period (for Resume experiences) */}
        {(poiData.company || poiData.period) && (
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-text-muted border-b border-dark-border/60 pb-3">
            {poiData.company && (
              <div className="flex items-center gap-1.5 text-text-primary font-medium">
                <Building className="h-4 w-4 text-accent-emerald" />
                <span>{poiData.company}</span>
              </div>
            )}
            {poiData.period && (
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-accent-emerald" />
                <span>{poiData.period}</span>
              </div>
            )}
            {poiData.role && (
              <span className="rounded bg-dark-surface px-2 py-0.5 text-accent-neon font-mono">
                {poiData.role}
              </span>
            )}
          </div>
        )}

        {/* Summary / Description */}
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-muted">
          {poiData.summary && (
            <p className="font-medium text-text-primary">
              {poiData.summary}
            </p>
          )}
          {poiData.description && (
            <p>{poiData.description}</p>
          )}
        </div>

        {/* Bulleted Details or Highlights */}
        {poiData.details && poiData.details.length > 0 && (
          <div className="mt-5 space-y-2 border-t border-dark-border/60 pt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary font-mono">
              {t('ui.highlights')}
            </h4>
            <ul className="space-y-1.5">
              {poiData.details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-neon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {poiData.highlights && poiData.highlights.length > 0 && (
          <div className="mt-5 space-y-2 border-t border-dark-border/60 pt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary font-mono">
              {t('ui.highlights')}
            </h4>
            <ul className="space-y-1.5">
              {poiData.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-neon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies (for Projects) */}
        {poiData.technologies && poiData.technologies.length > 0 && (
          <div className="mt-5 border-t border-dark-border/60 pt-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-primary font-mono flex items-center gap-1.5">
              <Code2 className="h-3.5 w-3.5 text-accent-emerald" />
              {t('ui.technologies')}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {poiData.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-dark-border bg-dark-surface px-2.5 py-1 text-xs font-mono text-accent-neon"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Contact Channels (for Beacon Island) */}
        {poiData.channels && poiData.channels.length > 0 && (
          <div className="mt-6 space-y-2 border-t border-dark-border/60 pt-4">
            <div className="grid gap-2 sm:grid-cols-1">
              {poiData.channels.map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-dark-border bg-dark-surface p-3.5 text-xs text-text-primary transition-all hover:border-accent-neon hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]"
                >
                  <span className="font-semibold text-accent-emerald">{chan.label}</span>
                  <div className="flex items-center gap-1 text-text-muted">
                    <span className="font-mono">{chan.value}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-accent-neon" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons for Projects */}
        {(poiData.github || poiData.demo) && (
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-dark-border/60 pt-5">
            {poiData.github && (
              <a
                href={poiData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-dark-border bg-dark-surface px-4 py-2.5 text-xs font-semibold text-text-primary transition-colors hover:border-accent-neon hover:text-accent-neon"
              >
                <GithubIcon className="h-4 w-4" />
                <span>{t('ui.viewCode')}</span>
              </a>
            )}
            {poiData.demo && (
              <a
                href={poiData.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-accent-neon/50 bg-gradient-to-r from-emerald-950/60 to-dark-surface px-4 py-2.5 text-xs font-semibold text-accent-neon transition-all hover:border-accent-neon hover:shadow-[0_0_18px_rgba(0,255,136,0.25)]"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{t('ui.liveDemo')}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
