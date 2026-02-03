'use client';

import Link from 'next/link';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(0);

  // Update maxHeight for smooth mobile slide-down
  useEffect(() => {
    if (menuRef.current) {
      if (window.innerWidth < 768) {
        setMaxHeight(menuOpen ? menuRef.current.scrollHeight : 0);
      } else {
        setMaxHeight('none');
        setMenuOpen(false);
      }
    }
  }, [menuOpen]);

  // Reset menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMaxHeight('none');
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkClasses = `
    flex-col md:flex-row gap-4 md:gap-8
    text-lg font-medium overflow-hidden md:overflow-visible
    transition-all duration-300 ease-in-out
    w-full md:w-auto
    items-center
  `;

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200 px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 text-white shadow-md">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <span className="text-2xl font-bold text-gray-900">
          Phish<span className="text-purple-600">Net</span>
        </span>
      </div>

      {/* Hamburger */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Links */}
      <div
        ref={menuRef}
        className={`${menuOpen ? 'flex' : 'hidden md:flex'} ${linkClasses}`}
        style={{
          maxHeight: menuOpen
            ? maxHeight === 'none'
              ? 'none'
              : `${maxHeight}px`
            : '0',
        }}
      >
        <Link href="/" 
        onClick={() => setMenuOpen(false)} 
        className="transition-colors duration-200 hover:text-purple-600">Home
        </Link>

        <Link href="/analyzer" onClick={() => setMenuOpen(false)} 
         className="transition-colors duration-200 hover:text-purple-600">AI URL Analyzer</Link>

        <Link href="/case-studies" onClick={() => setMenuOpen(false)}
        className="transition-colors duration-200 hover:text-purple-600">Case Studies</Link>

        <Link href="/whitepapers" onClick={() => setMenuOpen(false)}
        className="transition-colors duration-200 hover:text-purple-600">Whitepapers</Link>
        
        <Link href="/training" onClick={() => setMenuOpen(false)}
        className="transition-colors duration-200 hover:text-purple-600">Training</Link>
      </div>
    </nav>
  );
}
