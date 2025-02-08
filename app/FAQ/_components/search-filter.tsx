import { SEARCH_FILTER } from '@/app/constant/seaerch';
import React from 'react';

interface SearchFilterProps {
  selectedTab: keyof typeof SEARCH_FILTER;
}

const SearchFilter = ({ selectedTab }: SearchFilterProps) => {
  const labelClassName =
    'relative mr-2 flex h-[var(--btn-md)] cursor-pointer overflow-hidden';
  const spanClassName =
    'flex min-w-[var(--btn-md)] items-center justify-center rounded-[calc(var(--btn-md)/2)] px-[var(--space-sm)] py-0 font-semibold peer-checked:bg-mint-900 peer-checked:text-white';

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

      {SEARCH_FILTER[selectedTab].map((filter, index) => (
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
