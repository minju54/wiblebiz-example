import { ICategoryItem, IFaqContext, ITab } from '@/app/types/faq';
import React, { createContext, ReactNode, useContext, useState } from 'react';

// FAQ 컨텍스트 기본 값
const defaultFaqContextValue = {
  selectedTab: null,
  setSelectedTab: () => {},

  selectedCategory: null,
  setSelectedCategory: () => {},
};

// 컨텍스트 생성
export const FAQContext = createContext<IFaqContext>(defaultFaqContextValue);

// FAQ 컨텍스트 프로바이드
export const FAQContextProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState<ITab | null>(null); // 선택한 탭
  const [selectedCategory, setSelectedCategory] =
    useState<ICategoryItem | null>(null); // 선택한 카테고리

  const contextValue = {
    selectedTab,
    selectedCategory,
    setSelectedTab,
    setSelectedCategory,
  };

  return (
    <FAQContext.Provider value={contextValue}>{children}</FAQContext.Provider>
  );
};

// FAQ 컨텍스트를 사용하는 커스텀 훅
export const useFAQContext = () => {
  return useContext(FAQContext);
};
