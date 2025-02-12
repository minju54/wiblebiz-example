'use client';

import React, { useState } from 'react';

import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons';

import Navigation from '../navigation';

/**
 * 헤더 우측에 위치한 햄버거 버튼
 */
const HamburgerButton = () => {
  const [isVisibleNav, setIsVisibleNav] = useState<boolean>(false); // 네비게이션 보여짐을 관리하는 상태변수
  const [isOpenAnimating, setIsOpenAnimating] = useState<boolean>(false); // 네비게이션 보여짐에 따른 애니메이션을 관리하는 상태변수

  // 햄버거 버튼 열고 닫힘을 관리하는 핸들러 함수
  const handleToggleButton = () => {
    if (isVisibleNav) {
      // 네비게이션 닫힘으로 변경
      setIsOpenAnimating(false);
      setTimeout(() => {
        setIsVisibleNav(false);
      }, 500); // 애니메이션 지속 시간 (0.5s)
    } else {
      // 네비게이션 열림으로 변경
      setIsOpenAnimating(true);
      setIsVisibleNav(true);
    }
  };

  return (
    <div>
      {/* 모바일 햄버거 버튼 */}
      <button
        type="button"
        className="md:hidden text-gray-800"
        onClick={handleToggleButton}
        aria-label="햄버거 버튼"
      >
        {isVisibleNav ? (
          <Cross1Icon width={20} height={20} />
        ) : (
          <HamburgerMenuIcon width={20} height={20} />
        )}
      </button>
      <Navigation
        isVisibleNav={isVisibleNav}
        isOpenAnimating={isOpenAnimating}
      />
    </div>
  );
};

export default HamburgerButton;
