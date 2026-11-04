'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function getLocale(pathname: string): 'en' | 'es' {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : 'en';
}

function toLocalizedPath(pathname: string, locale: 'en' | 'es'): string {
  const clean = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  if (locale === 'es') {
    if (clean === '/') return '/es';
    if (clean === '/es' || clean.startsWith('/es/')) return clean;
    return `/es${clean}`;
  }

  if (clean === '/es') return '/';
  if (clean.startsWith('/es/')) return clean.slice(3) || '/';
  return clean;
}

export function Footer() {
  const pathname = usePathname() || '/';
  const locale = getLocale(pathname);

  const labels =
    locale === 'en'
      ? {
          menus: 'Digital menus',
          websites: 'Websites',
          ads: 'Social ads',
          work: 'Work',
          studio: 'Studio',
          privacy: 'Privacy',
          tagline: 'Design studio · Tijuana, MX ·',
        }
      : {
          menus: 'Menus digitales',
          websites: 'Sitios web',
          ads: 'Anuncios sociales',
          work: 'Trabajos',
          studio: 'Estudio',
          privacy: 'Privacidad',
          tagline: 'Estudio de diseño · Tijuana, MX ·',
        };

  return (
    <footer>
      <div className="wrap">
        <Link className="mark" href={toLocalizedPath('/', locale)}>
          kakao<span>.</span>ink
        </Link>
        <div>
          <Link className="f" href={toLocalizedPath('/menu', locale)}>
            {labels.menus}
          </Link>
          <Link className="f" href={toLocalizedPath('/websites', locale)}>
            {labels.websites}
          </Link>
          <Link className="f" href={toLocalizedPath('/ads', locale)}>
            {labels.ads}
          </Link>
          <Link className="f" href={toLocalizedPath('/work', locale)}>
            {labels.work}
          </Link>
          <Link className="f" href={toLocalizedPath('/', locale)}>
            {labels.studio}
          </Link>
          <Link className="f" href={toLocalizedPath('/privacy', locale)}>
            {labels.privacy}
          </Link>
        </div>
        <small>
          {labels.tagline}
          <a href="mailto:hello@kakao.ink"> hello@kakao.ink </a>
        </small>
      </div>
    </footer>
  );
}
