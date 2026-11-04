'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const KEY = 'cookie-notice-ok';

// No consent gate needed: the site sets no tracking cookies (Vercel Analytics is cookieless).
// This is an informational notice only. Add accept/reject logic if a cookie-based tracker is added.
export function CookieNotice() {
  const es = (usePathname() || '/').startsWith('/es');
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShow(!localStorage.getItem(KEY));
    } catch {}
  }, []);

  if (!show) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, '1');
    } catch {}
    setShow(false);
  };

  return (
    <div className="cookie" role="region" aria-label={es ? 'Aviso de cookies' : 'Cookie notice'}>
      <p>
        {es
          ? 'No usamos cookies de rastreo ni publicidad. Solo medimos visitas de forma anónima. '
          : "We don't use tracking or advertising cookies. We only count visits anonymously. "}
        <Link href={es ? '/es/privacy' : '/privacy'}>
          {es ? 'Aviso de privacidad' : 'Privacy policy'}
        </Link>
      </p>
      <button className="btn sm" onClick={dismiss}>
        {es ? 'Entendido' : 'Got it'}
      </button>
    </div>
  );
}
