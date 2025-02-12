'use client';

import React from 'react';

import { TAB_LIST } from '@/app/constant/faq';
import { ITab } from '@/app/types/faq';
import * as Tabs from '@radix-ui/react-tabs';

import { useFAQContext } from '../context/faq-context-provider';
import FAQList from '../faq-list';
import { ServiceSearch } from '../form/service-search';
import SearchFilter from '../search-filter';

/**
 * FAQ 탭 컨테이너 컴포넌트
 */
const FAQTabContainer = () => {
  const { setSelectedTab, setSelectedCategory, setSearchQuestion } =
    useFAQContext();

  // 탭 선택 이벤트 핸들러
  const handleClickTab = (tabItem: ITab) => {
    setSelectedTab(tabItem);
    setSelectedCategory(null);
    setSearchQuestion(null);
  };

  return (
    <Tabs.Root defaultValue={TAB_LIST[0].id}>
      <Tabs.List className="mb-[var(--px-lg)] flex" aria-label="service-tab">
        {TAB_LIST.map((tabItem, index) => (
          <Tabs.Trigger
            key={index}
            value={tabItem.id}
            className={`w-full border p-2 font-bold data-[state=active]:border-midnight-900 data-[state=active]:bg-midnight-900 data-[state=active]:text-white
              h-[40px] sm:h-[48px] md:h-[56px]`}
            onClick={() => handleClickTab(tabItem)}
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
