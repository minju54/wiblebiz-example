'use client';

import React, { useEffect, useState } from 'react';

import HamburgerButton from './button/hamburger-button';
import GNB from './gnb';
import WibleLogo from './wible-logo';

// 사이트 최상단 헤더 컴포넌트
const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 bg-white ${isScrolled && 'shadow-[0_4px_32px_0_rgba(0,0,0,0.08)]'}`}
    >
      <div className="flex h-[var(--header-height)] px-[var(--side-padding)]">
        <WibleLogo />
        <div className="ml-auto flex items-center gap-4">
          <GNB />
          <HamburgerButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
