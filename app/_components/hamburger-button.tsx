'use client';
import React, { useState } from 'react';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';
import Navigation from './navigation';

// 헤더 우측에 위치한 햄버거 버튼
const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      {/* 모바일 햄버거 버튼 */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Cross1Icon width={20} height={20} />
        ) : (
          <HamburgerMenuIcon width={20} height={20} />
        )}
      </button>
      {isOpen && <Navigation />}
    </div>
  );
};

export default HamburgerButton;
