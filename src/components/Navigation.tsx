'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 bg-white/50 backdrop-blur-sm border-b z-50">
      <div className="container-width flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/2ml_logo.png"
            alt="2ML Logo"
            width={48}
            height={48}
            className="hover:opacity-80 transition-opacity"
          />
          <span className="font-semibold text-lg">2ML</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-gray-600 hover:text-primary-600 ${
                pathname === item.path ? 'text-primary-600 font-medium' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-primary-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-16 left-0 right-0 bg-white border-t">
            <div className="px-4 py-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 px-4 text-gray-600 hover:bg-gray-50 rounded ${
                    pathname === item.path ? 'text-primary-600 bg-primary-50' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 