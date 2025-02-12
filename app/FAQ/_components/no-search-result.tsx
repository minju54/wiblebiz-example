import React from 'react';

/**
 * 검색 결과가 없을떄 보여주는 컴포넌트
 */
const NoSearchResult = () => {
  return (
    <div className="border-b border-b-gray-200 border-t-2 border-t-midnight-900 py-[var(--space-box2)] text-center">
      <p
        className={`text-gray-500 leading-[var(--line-height-md)] mt-[var(--space-xsm)] break-keep
          before:block before:bg-[url('/icons/ic_nodata.svg')] before:bg-contain before:h-[var(--ic-xlg2)] before:w-[var(--ic-xlg2)] before:mx-auto before:mb-[var(--space-xsm2)]
        `}
      >
        검색결과가 없습니다.
      </p>
    </div>
  );
};

export default NoSearchResult;
