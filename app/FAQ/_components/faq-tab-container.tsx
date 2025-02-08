'use client';

import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { ServiceSearch } from './form/service-search';
import SearchFilter from './search-filter';
import { SEARCH_FILTER, TAB_LIST } from '@/app/constant/seaerch';
import FAQList from './faq-list';

// FAQ 탭 컨테이너 컴포넌트
const FAQTabContainer = () => {
  // 선택한 탭을 저장하는 변수
  const [selectedTab, setSelectedTab] = useState<keyof typeof SEARCH_FILTER>(
    TAB_LIST[0].id,
  );

  return (
    <Tabs.Root defaultValue={TAB_LIST[0].id}>
      <Tabs.List className="mb-[var(--px-lg)] flex" aria-label="service-tab">
        {TAB_LIST.map((tabItem, index) => (
          <Tabs.Trigger
            key={index}
            value={tabItem.id}
            className={`w-full border p-2 font-bold data-[state=active]:border-midnight-900 data-[state=active]:bg-midnight-900 data-[state=active]:text-white`}
            onClick={() => setSelectedTab(tabItem.id)}
          >
            {tabItem.name}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {TAB_LIST.map((tabItem, index) => (
        <Tabs.Content key={index} value={tabItem.id}>
          <ServiceSearch />
          <SearchFilter selectedTab={selectedTab} />
          <FAQList />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
export default FAQTabContainer;
