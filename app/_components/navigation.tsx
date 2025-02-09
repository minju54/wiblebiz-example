'use client';
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constant/menu';

// 헤더 우측 햄버거 버튼 클릭 시 나오는 네비게이션 메뉴
const Navigation = () => {
  // TODO activeIndex 전역 관리
  const [activeIndex, setActiveIndex] = useState<number>(1); // 두 번째 메뉴 활성화

  return (
    <div className="fixed inset-0 top-[4rem] w-full h-[calc(100vh-4rem)] bg-white shadow-lg flex flex-col items-center gap-6 md:hidden pt-8">
      {NAV_ITEMS.map((item, index) => (
        <a
          key={index}
          href="#"
          onClick={() => setActiveIndex(index)}
          className={`text-xl text-gray-800 ${activeIndex === index && 'text-mint-900'}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
