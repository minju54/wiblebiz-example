import React from 'react';

import { PROCESS_INFORMATION } from '@/app/constant/faq';
import Image from 'next/image';

import TitleHeader from '../header/title-header';
import ProcessItem from '../process-item';

/**
 * 이용 프로세스 컨테이너 컴포넌트
 */
const ProcessInformationContainer = () => {
  return (
    <section>
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
              <Image
                src="/icons/ic_step_arrow.svg"
                className="hidden md:block w-6 h-6"
                alt="ic_arrow_icon"
                width={24}
                height={24}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessInformationContainer;
