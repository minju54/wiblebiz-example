import React from 'react';

import { useFAQContext } from '../context/faq-context-provider';

interface SearchInfoProps {
  onReset: () => void;
}

/**
 * 검색 결과 정보 컴포넌트
 * @param onReset form reset 함수
 */
const SearchInfo = ({ onReset }: SearchInfoProps) => {
  const { searchResultCount } = useFAQContext();

  return (
    <div className="flex justify-between my-[var(--px-md)]">
      <h2 style={{ fontSize: 'var(--heading-info)' }}>
        <b>
          검색결과 총 <span className="text-mint-900">{searchResultCount}</span>
          건
        </b>
      </h2>
      <button
        type="button"
        onClick={onReset}
        className={`flex text-base px-1 items-center before:block before:bg-[url('/icons/ic_init.svg')]
          before:mr-[2px] before:w-[var(--ic-sm)] before:h-[var(--ic-sm)]`}
      >
        검색초기화
      </button>
    </div>
  );
};

export default SearchInfo;
