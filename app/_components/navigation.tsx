'use client';

import React from 'react';

import { NAV_ITEMS } from '../constant/menu';
import useMenuStore from '../store/menu';

interface NavigationProps {
  isVisibleNav: boolean;
  isOpenAnimating: boolean;
}

/**
 * 헤더 우측 햄버거 버튼 클릭 시 나오는 네비게이션 메뉴
 */
const Navigation = ({ isVisibleNav, isOpenAnimating }: NavigationProps) => {
  // 선택된 GnB 메뉴
  const { selectedGnbMenuId, setSelectedGnbMenuId } = useMenuStore();

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
                href={item.href}
                onClick={() => setSelectedGnbMenuId(item.id)}
                className={`text-2xl text-gray-800 ${selectedGnbMenuId === item.id && 'text-mint-900'}`}
              >
                <b>{item.name}</b>
              </a>
            ))}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
