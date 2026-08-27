'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
];

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // A route change leaves the panel stranded open over the new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Escape closes the panel and hands focus back to the control that opened it
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="container-editorial flex h-[60px] items-center justify-between lg:h-[72px]">
        <Link href="/" className="flex shrink-0 items-center gap-2 lg:gap-2.5">
          <Image
            src="/images/2ml_logo.png"
            alt="2ML"
            width={36}
            height={36}
            // The logo ships on an opaque white ground; multiply drops it into the paper
            className="h-[30px] w-[30px] object-contain mix-blend-multiply lg:h-9 lg:w-9"
            priority
          />
          <span className="font-serif text-[22px] leading-none lg:text-2xl">2ML</span>
        </Link>

        <div className="hidden items-center gap-8 text-[15px] text-muted sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={pathname === item.path ? 'page' : undefined}
              className={`transition-colors duration-200 hover:text-ink ${
                pathname === item.path ? 'text-ink' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-outline">
            Talk to a partner
          </Link>
        </div>

        <div className="flex items-center gap-3.5 sm:hidden">
          {/* Below ~360px the pill and the toggle no longer fit beside the wordmark */}
          <Link
            href="/contact"
            className="btn-outline hidden px-3.5 py-2 text-[13px] min-[360px]:inline-flex"
          >
            Talk to a partner
          </Link>
          <button
            ref={toggleRef}
            type="button"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-1 flex h-9 w-9 items-center justify-center text-ink"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d={isMenuOpen ? 'M6 18 18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!isMenuOpen}
        className="border-t border-rule bg-paper sm:hidden"
      >
        <div className="container-editorial flex flex-col py-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={pathname === item.path ? 'page' : undefined}
              className={`border-b border-rule py-3.5 text-base ${
                pathname === item.path ? 'text-ink' : 'text-muted'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            aria-current={pathname === '/contact' ? 'page' : undefined}
            className={`hidden py-3.5 text-base min-[360px]:block ${
              pathname === '/contact' ? 'text-ink' : 'text-muted'
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            aria-current={pathname === '/contact' ? 'page' : undefined}
            className={`py-3.5 text-base min-[360px]:hidden ${
              pathname === '/contact' ? 'text-ink' : 'text-muted'
            }`}
          >
            Talk to a partner
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
