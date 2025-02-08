'use client';
import { downloadFile } from '@/app/utils/download-file';
import React from 'react';

const ServiceInquiryContainer = () => {
  const aTagClassName =
    'cursor-pointer flex border border-midnight-900 w-full min-h-[var(--btn-xxlg)] px-4 items-center mb-3 sm:mb-6 sm:justify-center';

  const handleDownload = async () => {
    const fileUrl =
      'https://wiblebiz.kia.com/static/media/proposal.604393960f70e45463b6.pdf';

    try {
      const response = await fetch(
        `/api/downloadFile?fileUrl=${encodeURIComponent(fileUrl)}`,
      );

      if (!response.ok) {
        throw new Error('파일 다운로드 실패');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'downloaded-file'; // 기본 파일명
      a.click();
      window.URL.revokeObjectURL(downloadUrl); // 메모리 해제
    } catch (error) {
      console.error('다운로드 중 오류 발생:', error);
      alert('다운로드 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h2
        className="m-[var(--heading-2-margin)]"
        style={{
          fontSize: 'var(--heading-2)',
          lineHeight: 'var(--line-height-sm)',
        }}
      >
        <strong>서비스 문의</strong>
      </h2>
      <div className="flex flex-col sm:flex-row sm:flex-wrap">
        <div className="flex w-full gap-3 sm:gap-6">
          <a className={`${aTagClassName} flex-1`} onClick={handleDownload}>
            <img
              src="/icons/ic_download.svg"
              alt="Download Icon"
              className="mr-2 w-[32px]"
            />
            <span className="font-bold">상품 제안서 다운로드</span>
          </a>
          <a className={`${aTagClassName} flex-1`}>
            <img
              src="/icons/ic_write.svg"
              alt="Write Icon"
              className="mr-2 w-[32px]"
            />
            <span className="font-bold">상담 문의 등록하기</span>
          </a>
        </div>
        <a className={`${aTagClassName} `}>
          <img
            src="/icons/ic_talk.svg"
            alt="Talk Icon"
            className="mr-2 w-[32px]"
          />
          <div className="flex flex-col">
            <span className="font-bold">카톡으로 문의하기</span>
            <span className="text-sm text-gray-500">
              ID: Wible Biz(위블 비즈)
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ServiceInquiryContainer;
