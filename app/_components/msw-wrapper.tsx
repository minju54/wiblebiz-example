'use client';

import { useEffect, useState } from 'react';

// MSW(Mock Service Worker)를 초기화하고, 초기화가 완료된 후에 자식 컴포넌트를 렌더링
const MSWWrapper = ({ children }: { children: React.ReactNode }) => {
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

  if (!isDev) return null;
  return <>{children}</>;
};

export default MSWWrapper;
