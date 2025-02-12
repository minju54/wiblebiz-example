'use client';

import { useEffect, useState } from 'react';

/**
 * MSW(Mock Service Worker)를 초기화하고, 초기화가 완료된 후에 자식 컴포넌트를 렌더링
 */
const MSWWrapper = ({ children }: { children: React.ReactNode }) => {
  // 개발 환경에서만 MSW 사용
  const isDev = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

  const [mswReady, setMswReady] = useState<boolean>(false);

  // 컴포넌트 마운트 시 비동기적으로 initMsw를 가져옴
  useEffect(() => {
    const init = async () => {
      const initMsw = await import('../mocks/index').then((res) => res.initMsw);
      await initMsw();
      setMswReady(true);
    };

    if (typeof window !== 'undefined' && !mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null; // MSW가 초기화될 때까지 아무것도 렌더링하지 않음
  }

  if (!isDev) return <>{children}</>; // 개발 환경이 아니면 바로 children 렌더링

  if (typeof window === 'undefined') {
    // 서버 사이드 렌더링 시점에서는 바로 children 렌더링
    return <>{children}</>;
  }

  return <>{children}</>;
};

export default MSWWrapper;
