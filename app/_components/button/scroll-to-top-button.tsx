'use client';

import { useEffect, useState } from 'react';

// 스크롤 시 생기는 플로팅 버튼
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-white shadow-lg transition-all duration-300 ${
        showButton ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <img src="/icons/ic_top.svg" className="w-6" />
    </button>
  );
};

export default ScrollToTopButton;
