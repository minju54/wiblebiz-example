import React from 'react';
import GNB from './gnb';
import HamburgerButton from './hamburger-button';
import WibleLogo from './wible-logo';

// 사이트 최상단 헤더 컴포넌트
const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="flex px-[var(--side-padding)] h-[var(--header-height)]">
        <WibleLogo />
        <div className="flex items-center gap-4 ml-auto">
          <GNB />
          <HamburgerButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
