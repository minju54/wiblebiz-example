import React from 'react';

interface ProcessItemProps {
  index: number;
  titleText: string;
  contentText: string;
}

const ProcessItem = ({ index, titleText, contentText }: ProcessItemProps) => {
  const contentIndex = index + 1;
  return (
    <div className="flex flex-row pb-3 md:flex-1 md:flex-col md:px-6">
      <img
        src={`/icons/ic_process0${contentIndex}.svg`}
        className="mr-4 h-[var(--ic-xlg)] w-[var(--ic-xlg)]"
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
