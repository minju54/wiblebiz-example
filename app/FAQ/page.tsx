import React from 'react';
import AppStoreContainer from './_components/app-store-container';
import FAQHeader from './_components/header/faq-header';
import FAQTabContainer from './_components/faq-tab-container';
import ProcessInformationContainer from './_components/process-information-container';
import ServiceInquiryContainer from './_components/service-inquiry-container';
import ScrollToTopButton from '../_components/scroll-to-top-button';

// FAQ 페이지
const FAQPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default FAQPage;
