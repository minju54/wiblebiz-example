'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

import { TAB_LIST } from '@/app/constant/faq';
import { ICategoryItem, IFaqContext, ITab } from '@/app/types/faq';

/**
 * FAQ 컨텍스트 생성
 */
export const FAQContext = createContext<IFaqContext>({} as IFaqContext);

/**
 * FAQ 컨텍스트 프로바이더
 */
export const FAQContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<ITab>(TAB_LIST[0]); // 선택한 탭
  const [selectedCategory, setSelectedCategory] =
    useState<ICategoryItem | null>(null); // 선택한 카테고리
  const [searchQuestion, setSearchQuestion] = useState<string | null>(null); // 검색어
  const [searchResultCount, setSearchResultCount] = useState<number>(0); // 검색 결과 수

  // FAQContext 기본값 설정
  const contextValue = {
    selectedTab,
    selectedCategory,
    searchQuestion,
    searchResultCount,
    setSelectedTab,
    setSelectedCategory,
    setSearchQuestion,
    setSearchResultCount,
  };

  return (
    <FAQContext.Provider value={contextValue}>{children}</FAQContext.Provider>
  );
};

/**
 * FAQ 컨텍스트를 사용하는 커스텀 훅
 */
export const useFAQContext = () => {
  return useContext(FAQContext);
};
