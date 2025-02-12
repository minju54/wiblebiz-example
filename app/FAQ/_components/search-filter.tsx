import React from 'react';

import { useGetQuery } from '@/app/hooks/use-get-query';
import { ICategoryItem } from '@/app/types/faq';

import { useFAQContext } from './context/faq-context-provider';

/**
 * 카테고리 검색 필터 컴포넌트
 */
const SearchFilter = () => {
  const { selectedTab, selectedCategory, setSelectedCategory } =
    useFAQContext();

  // 카테고리 필터 조회 쿼리
  const { data } = useGetQuery<ICategoryItem[]>({
    queryKey: ['tabCategory', selectedTab.id],
    endpoint: `/api/faq/category?tab=${selectedTab?.id}`,
  });

  // 공통 className 변수
  const labelClassName =
    'relative mr-2 flex h-[var(--btn-md)] cursor-pointer overflow-hidden';
  const spanClassName = `flex min-w-[var(--btn-md)] items-center justify-center rounded-[calc(var(--btn-md)/2)] 
    px-[var(--space-sm)] py-0 font-semibold peer-checked:bg-mint-900 peer-checked:text-white`;

  // 카테고리 버튼 클릭 핸들러
  const handleClickCategory = (selectedCategory: ICategoryItem | null) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <div className="mb-[var(--px-md)] flex flex-wrap">
      <label
        className={labelClassName}
        onClick={() => handleClickCategory(null)}
      >
        <input
          type="radio"
          name="filter"
          className="peer sr-only absolute -left-full"
          checked={selectedCategory === null}
          onChange={() => {}}
        />
        <span className={spanClassName}>전체</span>
      </label>

      {data?.map((categoryItem: ICategoryItem, index: number) => (
        <label
          key={index}
          className={labelClassName}
          onClick={() => handleClickCategory(categoryItem)}
        >
          <input
            type="radio"
            name="filter"
            className="peer sr-only absolute -left-full"
          />
          <span className={spanClassName}>{categoryItem.name}</span>
        </label>
      ))}
    </div>
  );
};

export default SearchFilter;
