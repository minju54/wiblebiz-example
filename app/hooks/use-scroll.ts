import { useEffect, useState } from 'react';

/**
 * 특정 스크롤 위치(threshold)를 기준으로 상태를 변경하는 커스텀 훅
 * @param threshold 스크롤 위치(px) 기준값
 * @returns {boolean} 현재 스크롤이 기준값을 넘었는지 여부
 */
const useScroll = (threshold: number) => {
  const [isPastThreshold, setIsPastThreshold] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치가 기준값을 넘었는지 여부를 업데이트
      setIsPastThreshold(window.scrollY > threshold);
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거 (메모리 누수 방지)
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPastThreshold;
};

export default useScroll;
