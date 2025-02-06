import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './_components/footer';
import Header from './_components/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '서비스 도입 FAQ | 위블 비즈(Wible Biz) - 친환경 모빌리티 서비스',
  description:
    '위블 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
  keywords:
    '위블비즈,위블 비즈,모빌리티,구독서비스,차량구독,차량관리,업무용차량,법인차,관용차,전기차,FMS,스마트솔루션',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="flex flex-col min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="flex-1 overflow-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
