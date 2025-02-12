import React from 'react';

import Image from 'next/image';

interface ProcessItemProps {
  index: number;
  titleText: string;
  contentText: string;
}

/**
 * 이용 프로세스 아이템 컴포넌트
 * @param index 프로세스 인덱스
 * @param titleText 이용 타이틀
 * @param contentText 이용 컨텐트
 */
const ProcessItem = ({ index, titleText, contentText }: ProcessItemProps) => {
  const contentIndex = index + 1;

  return (
    <div className="flex flex-row pb-3 md:flex-1 md:flex-col md:px-6">
      <Image
        src={`/icons/ic_process0${contentIndex}.svg`}
        className="mr-4 h-[var(--ic-xlg)] w-[var(--ic-xlg)]"
        alt={'process_icon'}
        width={40}
        height={40}
      />
      <span>
        <strong className="text-base sm:text-lg">
          {contentIndex.toString()}. {titleText}
        </strong>
        <p className="mt-1 text-sm sm:mt-2 sm:text-sm">{contentText}</p>
      </span>
    </div>
  );
};

export default ProcessItem;
