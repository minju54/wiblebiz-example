'use client';

import React from 'react';

import LinkButton from '../button/link-button';
import TitleHeader from '../header/title-header';

// 서비스 문의 컴포넌트 컨테이너
const ServiceInquiryContainer = () => {
  const KAKAO_INQUIRY_URL = 'https://pf.kakao.com/_xfLxjdb';

  const handleDownload = () => {
    const fileUrl = '/file/위블비즈 상품제안서.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '위블비즈 상품제안서.pdf';
    link.click();
  };

  return (
    <div>
      <TitleHeader title={'서비스 문의'} />
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 md:flex-nowrap">
        <LinkButton
          icon="/icons/ic_download.svg"
          alt="Download Icon"
          onClick={handleDownload}
          className="flex min-h-[var(--btn-xxlg)] items-center border border-midnight-900 pl-[20px] sm:flex-1 sm:justify-center sm:pl-0"
          iconClassName="mr-2 w-[var(--ic-lg)]"
        >
          <span className="font-bold">상품 제안서 다운로드</span>
        </LinkButton>
        <LinkButton
          icon="/icons/ic_write.svg"
          alt="Write Icon"
          className="flex min-h-[var(--btn-xxlg)] items-center border border-midnight-900 pl-[20px] sm:flex-1 sm:justify-center sm:pl-0"
          iconClassName="mr-2 w-[var(--ic-lg)]"
        >
          <span className="font-bold">상담 문의 등록하기</span>
        </LinkButton>
        <LinkButton
          icon="/icons/ic_talk.svg"
          alt="Talk Icon"
          href={KAKAO_INQUIRY_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-[var(--btn-xxlg)] flex-1 items-center border border-midnight-900 pl-[20px] sm:min-w-[calc(100%-var(--space-md))] sm:justify-center sm:pl-0 md:min-w-[20px]"
          iconClassName="mr-2 w-[var(--ic-lg)]"
        >
          <div className="flex flex-col">
            <span className="font-bold">카톡으로 문의하기</span>
            <span className="text-sm text-gray-500">
              ID: Wible Biz(위블 비즈)
            </span>
          </div>
        </LinkButton>
      </div>
    </div>
  );
};

export default ServiceInquiryContainer;
