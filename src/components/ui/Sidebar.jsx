import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Mail,
  Download,
  MapPin,
  Layers,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Sidebar({ isOpen, onClose }) {
  const { t } = useTranslation();

  const profile = {
    name: t('profile.name'),
    role: t('profile.role'),
    bio: t('profile.bio'),
    location: t('profile.location'),
    status: t('profile.status'),
    tags: t('profile.tags', { returnObjects: true }) || [],
    social: t('profile.social', { returnObjects: true }) || {},
    cvUrl: t('profile.cvUrl'),
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-16 bottom-0 left-0 z-40 flex w-[85vw] max-w-[35rem] flex-col justify-between border-r border-dark-border/80 bg-dark-bg/95 p-6 backdrop-blur-lg transition-transform duration-300 md:w-[35vw] md:max-w-none md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } overflow-y-auto`}
      >
        <div className="flex w-full flex-col items-center text-center">
          {/* Profile Image Frame */}
          <div className="mb-5 flex w-full justify-center">
            <div className="relative aspect-[768/1027] w-[82%] max-w-72 overflow-hidden rounded-2xl border-2 border-accent-neon/50 bg-gradient-to-br from-dark-surface to-dark-card p-1 shadow-[0_0_20px_rgba(0,255,136,0.15)]">
              <img
                src="/assets/Foto-Perfil.jpg"
                alt={`Foto de perfil de ${profile.name}`}
                className="h-full w-full rounded-xl bg-dark-card object-contain"
              />
              {/* Status Pulse Badge */}
              <div
                className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-dark-bg"
                title={profile.status}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-neon opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-neon"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h2 className="text-lg font-bold text-text-primary">{profile.name}</h2>
          <p className="mt-1 text-xs font-medium text-accent-emerald">{profile.role}</p>

          <div className="mt-2 flex items-center gap-1.5 text-xs text-text-muted">
            <MapPin className="h-3.5 w-3.5 text-accent-emerald" />
            <span>{profile.location}</span>
            <span className="text-dark-border">•</span>
            <span className="text-[11px] text-accent-neon/90">{profile.status}</span>
          </div>

          {/* Short Bio */}
          <p className="mt-4 text-xs leading-relaxed text-text-muted text-left border-t border-dark-border/60 pt-4">
            {profile.bio}
          </p>

          {/* Core Specialization Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5 justify-start w-full border-t border-dark-border/60 pt-4">
            {profile.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-md border border-dark-border/90 bg-dark-surface/80 px-2 py-0.5 text-[11px] font-mono text-text-primary hover:border-accent-neon/60 hover:text-accent-neon transition-colors"
              >
                <Layers className="h-2.5 w-2.5 text-accent-emerald" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions: Socials & CV Download */}
        <div className="mt-6 border-t border-dark-border/60 pt-5">
          {/* Social Icons */}
          <div className="mb-4 flex items-center justify-center gap-3">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-border bg-dark-surface text-text-muted transition-colors hover:border-accent-neon hover:text-accent-neon hover:shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-border bg-dark-surface text-text-muted transition-colors hover:border-accent-neon hover:text-accent-neon hover:shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
            {profile.social.email && (
              <a
                href={`mailto:${profile.social.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-dark-border bg-dark-surface text-text-muted transition-colors hover:border-accent-neon hover:text-accent-neon hover:shadow-[0_0_10px_rgba(0,255,136,0.2)]"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Download CV Button */}
          <a
            href={profile.cvUrl}
            download="CV_Thiago_Panchiniak.pdf"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-accent-neon/50 bg-gradient-to-r from-emerald-950/40 to-dark-surface px-4 py-2.5 text-xs font-semibold text-accent-neon transition-all hover:border-accent-neon hover:bg-emerald-900/30 hover:shadow-[0_0_18px_rgba(0,255,136,0.25)] focus:outline-none"
          >
            <Download className="h-4 w-4" />
            <span>{t('ui.downloadCv')}</span>
          </a>
        </div>
      </aside>
    </>
  );
}
