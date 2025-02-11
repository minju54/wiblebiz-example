import React, { useEffect } from 'react';

import { useGetInfiniteQuery } from '@/app/hooks/use-get-infinite-query';
import { IFaqServiceResponse } from '@/app/types/faq';

import { useFAQContext } from './context/faq-context-provider';
import FaqListItem from './faq-list-item';

/**
 * FAQ 리스트 컴포넌트
 */
const FAQList = () => {
  const {
    selectedTab,
    selectedCategory,
    searchQuestion,
    setSearchResultCount,
  } = useFAQContext();

  // 리스트 조회 쿼리
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useGetInfiniteQuery<IFaqServiceResponse>({
      queryKey: ['faqList'],
      endpoint: `/api/faq?tab=${selectedTab.id}&faqCategoryID=${selectedCategory ? selectedCategory.categoryID : ''}&question=${searchQuestion ?? ''}`,
    });

  // 더보기 버튼
  const MoreButton = () => (
    <button
      className="mt-[calc(var(--px-lg)-8px)] h-[var(--btn-xlg2)] w-full items-center"
      style={{ fontSize: 'var(--list-more-size)' }}
      disabled={isFetchingNextPage}
      onClick={() => fetchNextPage()}
    >
      + 더보기
    </button>
  );

  // 탭, 카테고리 변경 시 쿼리 재조회
  useEffect(() => {
    refetch();
  }, [selectedTab, selectedCategory, searchQuestion]);

  useEffect(() => {
    setSearchResultCount(data?.pages[0].totalCount ?? 0);
  }, [data]);

  // TODO 검색 결과 없을때 처리
  return (
    <div>
      <ul className="border-t-2 border-midnight-900">
        {data?.pages.map((page, index) => (
          <div key={index}>
            {page.items.map((faqItem, index) => (
              <FaqListItem key={index} index={index} faqItem={faqItem} />
            ))}
          </div>
        ))}
      </ul>
      {hasNextPage && <MoreButton />}
    </div>
  );
};

export default FAQList;
