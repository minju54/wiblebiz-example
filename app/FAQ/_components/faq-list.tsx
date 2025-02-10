import React, { useEffect, useState } from 'react';

import { useGetInfiniteQuery } from '@/app/hooks/use-get-infinite-query';
import { IFaqServiceResponse } from '@/app/types/faq';
import parse from 'html-react-parser';
import Image from 'next/image';

import { useFAQContext } from './context/faq-context-provider';

/**
 * FAQ 리스트 컴포넌트
 */
const FAQList = () => {
  const { selectedTab, selectedCategory } = useFAQContext();
  console.log('selectedCategory', selectedCategory);

  // 현재 펼친 인덱스
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useGetInfiniteQuery<IFaqServiceResponse>({
      queryKey: ['faqList'],
      endpoint: `/api/faq?tab=${selectedTab.id}&faqCategoryID=${selectedCategory ? selectedCategory.categoryID : ''}`,
    });

  useEffect(() => {
    refetch();
  }, [selectedTab, selectedCategory]);

  return (
    <div>
      <ul className="border-t-2 border-midnight-900">
        {data?.pages.map((page, index) => (
          <div key={index}>
            {page.items.map((faqItem, index) => (
              <li key={index} className="border-b border-gray-100">
                <h4
                  className={`${expandedIndex === index ? 'bg-gray-10' : ''}`}
                >
                  <button
                    type="button"
                    className={`pr-[calc(var(--px-xlg) + 1.6em)] relative flex w-full flex-wrap items-center overflow-hidden py-[var(--faq-list-a-padding-v)] md:w-full md:flex-nowrap ${expandedIndex === index && 'bg-gray-10'}`}
                    style={{ fontSize: 'var(--faq-list-a-size)' }}
                    onClick={() => toggleExpand(index)}
                  >
                    <p className="py-[var(--faq-list-a-padding-h)] text-xs text-gray-500 sm:p-0 sm:text-sm md:box-border md:w-[184px] md:flex-none md:px-[var(--faq-list-a-padding-h)] md:text-base">
                      {faqItem.categoryName}
                    </p>
                    <p className="flex w-auto text-xs text-gray-500 sm:text-sm md:w-[130px] md:flex-none md:px-[var(--faq-list-a-padding-h)] md:text-base">
                      <span className="px-1 md:hidden">&gt;</span>
                      {faqItem.subCategoryName}
                    </p>
                    <strong className="flex min-w-full text-left sm:p-0 md:flex-1 md:pl-[var(--faq-list-a-padding-h)]">
                      {faqItem.question}
                    </strong>
                    <Image
                      src="/icons/ic_arrow.svg"
                      alt="arrow_icon"
                      width={32}
                      height={32}
                      className={`absolute right-2 h-[var(--ic-md)] text-gray-500 transition-transform duration-700 
                    ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </button>
                </h4>
                <div
                  className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                    expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <div className="bt-gray-100 overflow-x-scroll border-t p-[var(--faq-list-q-padding)] leading-[var(--line-height-lg)]">
                    {parse(faqItem.answer)}
                  </div>
                </div>
              </li>
            ))}
          </div>
        ))}
      </ul>
      {hasNextPage && (
        <button
          className="mt-[calc(var(--px-lg)-8px)] h-[var(--btn-xlg2)] w-full items-center"
          style={{ fontSize: 'var(--list-more-size)' }}
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          + 더보기
        </button>
      )}
    </div>
  );
};

export default FAQList;
