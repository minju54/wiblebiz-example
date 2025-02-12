import React from 'react';

import ScrollToTopButton from '../_components/button/scroll-to-top-button';
import AppStoreContainer from './_components/container/app-store-container';
import FAQTabContainer from './_components/container/faq-tab-container';
import ProcessInformationContainer from './_components/container/process-information-container';
import ServiceInquiryContainer from './_components/container/service-inquiry-container';
import { FAQContextProvider } from './_components/context/faq-context-provider';
import FAQHeader from './_components/header/faq-header';

/**
 * FAQ 페이지
 */
export default function FAQPage() {
  return (
    <FAQContextProvider>
      {/* 헤더 */}
      <FAQHeader />
      {/* 탭 영역 */}
      <FAQTabContainer />
      {/* 서비스 문의 */}
      <ServiceInquiryContainer />
      {/* 이용 프로세스 안내 */}
      <ProcessInformationContainer />
      {/* 앱 스토어 이동 */}
      <AppStoreContainer />
      {/* 위로가기 floating 버튼 */}
      <ScrollToTopButton />
    </FAQContextProvider>
  );
}
