'use client';

import React from 'react';

import useScroll from '../hooks/use-scroll';
import HamburgerButton from './button/hamburger-button';
import GNB from './gnb';
import WibleLogo from './wible-logo';

/**
 * 사이트 최상단 헤더 공통 컴포넌트
 */
const Header = () => {
  // 스크롤이 10px 이상 내려갔을때 True
  const isScrolled = useScroll(10);

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
