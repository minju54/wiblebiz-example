import React, { useEffect } from 'react';

import { SEARCH_FILTER } from '@/app/constant/seaerch';

import { useFAQContext } from './context/faq-context-provider';

// 카테고리 검색 필터 컴포넌트
const SearchFilter = () => {
  const { selectedTab } = useFAQContext();

  const labelClassName =
    'relative mr-2 flex h-[var(--btn-md)] cursor-pointer overflow-hidden';
  const spanClassName =
    'flex min-w-[var(--btn-md)] items-center justify-center rounded-[calc(var(--btn-md)/2)] px-[var(--space-sm)] py-0 font-semibold peer-checked:bg-mint-900 peer-checked:text-white';

  const fetchCategory = async () => {
    const response = await fetch('/api/faq/category?tab=CONSULT');
    const data = await response.json();
    console.log('response2', data);
  };

  useEffect(() => {
    console.log('selectedTab', selectedTab);
    fetchCategory();
  }, []);

  return (
    <div className="mb-[var(--px-md)] flex flex-wrap">
      <label className={labelClassName}>
        <input
          type="radio"
          name="filter"
          className="peer sr-only absolute -left-full"
          defaultChecked
        />
        <span className={spanClassName}>전체</span>
      </label>

      {SEARCH_FILTER.SERVICE_CONSULT.map((filter, index) => (
        <label key={index} className={labelClassName}>
          <input
            type="radio"
            name="filter"
            className="peer sr-only absolute -left-full"
          />
          <span className={spanClassName}>{filter.id}</span>
        </label>
      ))}
    </div>
  );
};

export default SearchFilter;
