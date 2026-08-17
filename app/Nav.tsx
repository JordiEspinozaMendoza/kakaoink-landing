'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/menu', label: 'Digital menus' },
  { href: '/websites', label: 'Websites' },
  { href: '/ads', label: 'Social ads' },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-in">
        <Link className="mark" href="/">
          kakao<span>.</span>ink
        </Link>
        <div className="nav-links">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className="txt"
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            );
          })}
          <Link className="btn sm" href="/#contact">
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  );
}
