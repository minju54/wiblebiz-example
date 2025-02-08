import React, { useState } from 'react';
import { FAQ_DATA_LIST } from '@/app/mock/faq-data';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import parse from 'html-react-parser';

const FAQList = () => {
  const ITEMS_PER_PAGE = 10;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div>
      <ul className="border-t-2 border-midnight-900">
        {FAQ_DATA_LIST.slice(0, visibleCount).map((faqItem, index) => (
          <li key={index} className="border-b border-gray-100">
            <h4 className={`${expandedIndex === index ?? 'bg-gray-10'}`}>
              <button
                type="button"
                className={`pr-[calc(var(--px-xlg) + 1.6em)] relative flex w-full flex-wrap items-center overflow-hidden py-[var(--faq-list-a-padding-v)] md:w-full md:flex-nowrap`}
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
                {expandedIndex === index ? (
                  <ChevronUpIcon className="absolute right-2 h-6 w-6 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="absolute right-2 h-6 w-6 text-gray-500" />
                )}
              </button>
            </h4>
            {expandedIndex === index && (
              <div className="bt-gray-100 leading-[var((--line-height-lg)] overflow-x-scroll border-t p-[var(--faq-list-q-padding)]">
                {parse(faqItem.answer)}
              </div>
            )}
          </li>
        ))}
      </ul>

      {visibleCount < FAQ_DATA_LIST.length && (
        <button
          className="mt-[calc(var(--px-lg)-8px)] h-[var(--btn-xlg2)] w-full items-center"
          style={{ fontSize: 'var(--list-more-size)' }}
          onClick={loadMore}
        >
          + 더보기
        </button>
      )}
    </div>
  );
};

export default FAQList;
