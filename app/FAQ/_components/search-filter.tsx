import React from 'react';

import { useGetQuery } from '@/app/hooks/use-get-query';
import { ICategoryItem } from '@/app/types/faq';

import { useFAQContext } from './context/faq-context-provider';

// 카테고리 검색 필터 컴포넌트
const SearchFilter = () => {
  const { selectedTab } = useFAQContext();

  const labelClassName =
    'relative mr-2 flex h-[var(--btn-md)] cursor-pointer overflow-hidden';
  const spanClassName = `flex min-w-[var(--btn-md)] items-center justify-center rounded-[calc(var(--btn-md)/2)] 
    px-[var(--space-sm)] py-0 font-semibold peer-checked:bg-mint-900 peer-checked:text-white`;

  // 카테고리 필터 조회 쿼리
  const { data } = useGetQuery<ICategoryItem[]>({
    queryKey: ['tabCategory', selectedTab.id],
    endpoint: `/api/faq/category?tab=${selectedTab?.id}`,
  });

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

      {data?.map((filter: ICategoryItem, index: number) => (
        <label key={index} className={labelClassName}>
          <input
            type="radio"
            name="filter"
            className="peer sr-only absolute -left-full"
          />
          <span className={spanClassName}>{filter.name}</span>
        </label>
      ))}
    </div>
  );
};

export default SearchFilter;
