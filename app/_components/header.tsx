import React from 'react';
import WibleLogo from './wible-logo';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-sm z-10">
      <div className="px-[48px] py-4">
        <WibleLogo />
        {/* 햄버거 메뉴 */}
        {/* GnB */}
      </div>
    </header>
  );
};

export default Header;
