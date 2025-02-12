'use client';

import React, { useState } from 'react';

import { NAV_ITEMS } from '../constant/menu';

interface NavigationProps {
  isVisibleNav: boolean;
  isOpenAnimating: boolean;
}

/**
 * 헤더 우측 햄버거 버튼 클릭 시 나오는 네비게이션 메뉴
 */
const Navigation = ({ isVisibleNav, isOpenAnimating }: NavigationProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // 두 번째 메뉴 활성화

  return (
    <nav>
      {isVisibleNav && (
        <ul
          className={`fixed inset-0 top-[var(--header-height)] w-full h-[calc(100vh-4rem)] 
            shadow-lg flex flex-col items-center gap-6 md:hidden pt-8 bg-white 
            ${isOpenAnimating ? 'animate-expandFromLeft' : 'animate-shrinkToLeft'}`}
        >
          <li className="flex flex-col pt-[80px] items-center space-y-8">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={() => setActiveIndex(index)}
                className={`text-2xl text-gray-800 ${activeIndex === index && 'text-mint-900'}`}
              >
                <b>{item}</b>
              </a>
            ))}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
