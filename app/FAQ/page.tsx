import React from 'react';
import AppStoreContainer from './_components/app-store-container';
import FAQHeader from './_components/faq-header';
import FAQTabContainer from './_components/faq-tab-container';
import ProcessInformationContainer from './_components/process-information-container';
import ServiceContainer from './_components/service-container';

const FAQPage = () => {
  return (
    <div>
      {/* 헤더 */}
      <FAQHeader />
      {/* 탭 영역 */}
      <FAQTabContainer />
      {/* 서비스 문의 */}
      <ServiceContainer />
      {/* 이용 프로세스 안내 */}
      <ProcessInformationContainer />
      {/* 앱 스토어 이동 */}
      <AppStoreContainer />
    </div>
  );
};

export default FAQPage;
