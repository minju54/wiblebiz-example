'use client';
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constant/menu';

// 헤더 우측에 위치한 GNB 메뉴
const GNB = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // 두 번째 메뉴 활성화

  return (
    <nav className="hidden md:flex gap-6 text-gray-800 w-full justify-items-end h-[var(--header-height)]">
      {NAV_ITEMS.map((item, index) => (
        <a
          key={index}
          href="#"
          onClick={() => setActiveIndex(index)}
          className="flex items-center relative px-2 pb-1 transition-all group"
        >
          <p>{item}</p>
          {activeIndex === index ? (
            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-mint-900" />
          ) : (
            <span className="absolute bottom-0 left-0 w-full h-[4px] bg-mint-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-50" />
          )}
        </a>
      ))}
    </nav>
  );
};

export default GNB;
