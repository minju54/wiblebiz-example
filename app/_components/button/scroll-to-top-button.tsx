'use client';

import useScroll from '@/app/hooks/use-scroll';
import Image from 'next/image';

/**
 * 스크롤 시 생기는 플로팅 버튼
 */
const ScrollToTopButton = () => {
  // 스크롤이 300px 이상 내려갔을때 True
  const isVisibleButton = useScroll(300);

  // 스크롤을 화면 상단으로 올리는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-white shadow-lg transition-all duration-300 ${
        isVisibleButton
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0'
      }`}
    >
      <Image src="/icons/ic_top.svg" alt="ic_top_icon" width={24} height={24} />
    </button>
  );
};

export default ScrollToTopButton;
