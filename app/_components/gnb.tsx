'use client';

import React, { useState } from 'react';

import { NAV_ITEMS } from '../constant/menu';

// 헤더 우측에 위치한 GNB 메뉴
const GNB = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1); // 두 번째 메뉴 활성화

  return (
    <nav className="hidden h-[var(--header-height)] w-full justify-items-end gap-6 text-gray-800 md:flex">
      {NAV_ITEMS.map((item, index) => (
        <a
          key={index}
          href="#"
          onClick={() => setActiveIndex(index)}
          className="group relative flex items-center px-2 pb-1 transition-all"
        >
          <strong>{item}</strong>
          {activeIndex === index ? (
            <span className="absolute bottom-0 left-0 h-[4px] w-full bg-mint-900" />
          ) : (
            <span className="absolute bottom-0 left-0 h-[4px] w-full origin-left scale-x-0 bg-mint-700 opacity-50 transition-transform duration-300 group-hover:scale-x-100" />
          )}
        </a>
      ))}
    </nav>
  );
};

export default GNB;
