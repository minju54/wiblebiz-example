import type { Metadata } from 'next';

import '../public/fonts/styles.css';
import Dialog from './_components/dialog/dialog';
import Footer from './_components/footer';
import Header from './_components/header';
import MSWWrapper from './_components/msw-wrapper';
import { META_DATA } from './constant/meta';
import './globals.css';
import QueryProvider from './query-provider';

export const metadata: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  keywords: META_DATA.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="flex min-h-screen flex-col">
      <body className={'font-KiaSignatureFix antialiased'}>
        {/* 쿼리를 위한 컨텍스트 제공자 */}
        <QueryProvider>
          {/* 전역 헤더 컴포넌트 */}
          <Header />
          <main className="mb-[80px] flex-1 overflow-auto px-[var(--side-padding)] min-h-screen">
            {/* Mock API 적용을 위한 Wrapper */}
            <MSWWrapper>
              <Dialog />
              {children}
            </MSWWrapper>
          </main>
          {/* 전역 푸터 컴포넌트 */}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
