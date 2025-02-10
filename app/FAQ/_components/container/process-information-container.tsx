import React from 'react';

import { PROCESS_INFORMATION } from '@/app/constant/faq';

import TitleHeader from '../header/title-header';
import ProcessItem from '../process_item';

// 이용 프로세스 컨테이너 컴포넌트
const ProcessInformationContainer = () => {
  return (
    <div>
      <TitleHeader title="이용 프로세스 안내" />
      <div className="flex flex-col md:flex-row md:flex-nowrap md:items-center">
        {PROCESS_INFORMATION.map((processItem, index) => (
          <div key={index} className="flex">
            <ProcessItem
              index={index}
              titleText={processItem.title}
              contentText={processItem.content}
            />
            {index != PROCESS_INFORMATION.length - 1 && (
              <img src="/icons/ic_step_arrow.svg" className="hidden md:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessInformationContainer;
