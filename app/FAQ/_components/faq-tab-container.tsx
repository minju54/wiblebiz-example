'use client';

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { TAB_LIST } from '@/app/constant/seaerch';
import { ServiceSearch } from './form/service-search';
import SearchFilter from './search-filter';
import FAQList from './faq-list';
import { useFAQContext } from './context/faq-context-provider';

// FAQ 탭 컨테이너 컴포넌트
const FAQTabContainer = () => {
  // 선택한 탭을 저장하는 변수
  const { setSelectedTab } = useFAQContext();

  return (
    <Tabs.Root defaultValue={TAB_LIST[0].id}>
      <Tabs.List className="mb-[var(--px-lg)] flex" aria-label="service-tab">
        {TAB_LIST.map((tabItem, index) => (
          <Tabs.Trigger
            key={index}
            value={tabItem.id}
            className={`w-full border p-2 font-bold data-[state=active]:border-midnight-900 data-[state=active]:bg-midnight-900 data-[state=active]:text-white`}
            onClick={() => setSelectedTab(tabItem)}
          >
            {tabItem.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {TAB_LIST.map((tabItem, index) => (
        <Tabs.Content key={index} value={tabItem.id}>
          <ServiceSearch />
          <SearchFilter />
          <FAQList />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
export default FAQTabContainer;
