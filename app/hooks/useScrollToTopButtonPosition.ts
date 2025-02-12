import { useEffect, useState } from 'react';

/**
 * 버튼의 위치를 계산하는 커스텀 훅
 * @returns buttonBottom 버튼 하단 위치
 */
const useScrollToTopButtonPosition = () => {
  const [buttonBottom, setButtonBottom] = useState(24); // 기본값: bottom-6 (24px)

  useEffect(() => {
    const updateButtonPosition = () => {
      const footer = document.getElementById('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // footer가 보이기 전에 미리 버튼 위치 고정
      if (footerRect.top <= windowHeight) {
        setButtonBottom(windowHeight - footerRect.top + 16);
      } else {
        setButtonBottom(24); // 기본 위치 유지
      }
    };

    window.addEventListener('scroll', updateButtonPosition);
    window.addEventListener('resize', updateButtonPosition);
    updateButtonPosition(); // 초기 위치 설정

    return () => {
      window.removeEventListener('scroll', updateButtonPosition);
      window.removeEventListener('resize', updateButtonPosition);
    };
  }, []);

  return buttonBottom;
};

export default useScrollToTopButtonPosition;
