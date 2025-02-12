'use client';

import useScroll from '@/app/hooks/use-scroll';
import useScrollToTopButtonPosition from '@/app/hooks/useScrollToTopButtonPosition';
import Image from 'next/image';

/**
 * 스크롤 시 생기는 플로팅 버튼
 */
const ScrollToTopButton = () => {
  // 스크롤이 300px 이상 내려갔을때 true
  const isVisibleButton = useScroll(300);

  // 버튼의 하단 위치를 가져오는 훅
  const buttonBottom = useScrollToTopButtonPosition();

  // 스크롤을 화면 상단으로 올리는 함수
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white text-white shadow-lg transition-all duration-300 
      ${isVisibleButton ? 'opacity-100' : 'opacity-0'}`}
      style={{
        position: 'fixed',
        bottom: `${buttonBottom}px`,
        right: '24px',
      }}
      aria-label="위로 스크롤 올리기"
    >
      <Image src="/icons/ic_top.svg" alt="ic_top_icon" width={24} height={24} />
    </button>
  );
};

export default ScrollToTopButton;
