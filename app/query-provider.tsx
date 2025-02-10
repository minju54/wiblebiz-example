'use client';

import React, { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// 전역적으로 사용할 QueryClient 인스턴스 생성
const queryClient = new QueryClient();

interface IProviders {
  children: ReactNode;
}

// React Query Provider 컴포넌트
const QueryProvider = ({ children }: IProviders) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* React Query 개발 도구 */}
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
