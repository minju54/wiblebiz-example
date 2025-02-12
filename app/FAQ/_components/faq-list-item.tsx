import React, { useState } from 'react';

import { IServiceItem } from '@/app/types/faq';
import parse from 'html-react-parser';
import Image from 'next/image';

import { useFAQContext } from './context/faq-context-provider';

interface FaqListItemProps {
  index: number;
  faqItem: IServiceItem;
}

/**
 * FAQ 리스트에 들어가는 아이템 컴포넌트
 * @param index 리스트 인덱스
 * @param faqItem faq 아이템 데이터
 */
const FaqListItem = ({ index, faqItem }: FaqListItemProps) => {
  const { selectedTab } = useFAQContext();

  // 현재 펼친 인덱스
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // FAQ 타이틀 컴포넌트
  const Title = () => (
    <>
      {selectedTab.id !== 'SERVICE_CONSULT' && (
        <p className="py-[var(--faq-list-a-padding-h)] text-xs text-gray-500 sm:p-0 sm:text-sm md:box-border md:w-[184px] md:flex-none md:px-[var(--faq-list-a-padding-h)] md:text-base">
          {faqItem.categoryName}
        </p>
      )}
      <p className="flex w-auto justify-center text-xs text-gray-500 sm:text-sm md:w-[150px] md:flex-none md:px-[var(--faq-list-a-padding-h)] md:text-base">
        {selectedTab.id !== 'SERVICE_CONSULT' && (
          <span className="px-1">&gt;</span>
        )}
        {faqItem.subCategoryName}
      </p>
      <strong className="flex min-w-full text-left sm:p-0 md:flex-1 md:pl-[var(--faq-list-a-padding-h)]">
        {faqItem.question}
      </strong>
    </>
  );

  // FAQ 내용 컴포넌트
  const Content = () => (
    <div
      className={`overflow-hidden transition-all duration-700 ease-in-out ${
        expandedIndex === index ? 'max-h-[1000px]' : 'max-h-0'
      }`}
    >
      <div className="bt-gray-100 overflow-x-scroll border-t p-[var(--faq-list-q-padding)] leading-[var(--line-height-lg)]">
        {parse(faqItem.answer)}
      </div>
    </div>
  );

  return (
    <li className="border-b border-gray-100">
      <h2 className={`${expandedIndex === index ? 'bg-gray-10' : ''}`}>
        <button
          type="button"
          className={`pr-[calc(var(--px-xlg) + 1.6em)] relative flex w-full flex-wrap items-center overflow-hidden 
            py-[var(--faq-list-a-padding-v)] md:w-full md:flex-nowrap ${expandedIndex === index && 'bg-gray-10'}`}
          style={{ fontSize: 'var(--faq-list-a-size)' }}
          onClick={() => toggleExpand(index)}
        >
          <Title />
          <Image
            src="/icons/ic_arrow.svg"
            alt="arrow_icon"
            width={32}
            height={32}
            className={`absolute right-2 h-[var(--ic-md)] text-gray-500 transition-transform duration-700 
              ${expandedIndex === index ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </h2>
      <Content />
    </li>
  );
};

export default FaqListItem;
