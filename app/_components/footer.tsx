import React from 'react';

import LinkButton from '../FAQ/_components/button/link-button';

/**
 * 공통 푸터 컴포넌트
 */
const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bottom-0 left-0 bg-midnight-900 px-[var(--side-padding)] text-gray-400"
    >
      <div className="flex max-w-[var(--max-width)] flex-col pb-[29px] pt-[18px] md:h-[var(--footer-height)] md:flex-row-reverse md:items-center md:justify-between">
        <div>
          {/* 개인정보 처리방침 */}
          <div className="mb-2 flex md:mb-0 md:justify-end">
            <LinkButton
              alt="개인정보 처리방침 버튼"
              className="mr-4 font-bold leading-10 text-white hover:underline sm:mr-6 md:ml-6"
            >
              개인정보 처리방침
            </LinkButton>
            <LinkButton
              alt="이용약관 버튼"
              className="font-bold leading-10 text-white hover:underline"
            >
              이용약관
            </LinkButton>
          </div>

          <address className="flex-wrap gap-3 text-left text-sm not-italic sm:flex-nowrap sm:gap-4 md:text-right md:text-xs">
            <span>
              서울특별시 서초구 헌릉로 12{' '}
              <em className="mx-3 not-italic">기아㈜</em>
            </span>
            <br className="block sm:hidden" />
            <span>
              대표: <i className="ml-1 not-italic">송호성, 최준영</i>
            </span>
            <br className="block md:hidden" />
            <span>
              사업자등록번호: <i className="mx-1 not-italic">119-81-02316</i>
            </span>
            <br className="block sm:hidden" />
            <span>
              통신판매번호: <i className="mx-1 not-italic">2006-07935</i>
            </span>
            <br className="block md:hidden" />
            <span className="mr-4 md:mr-0">
              고객센터: <i className="mx-1 not-italic">1833-4964</i>
            </span>
            <br className="hidden md:block" />
            <span>
              제휴문의:{' '}
              <a
                href="mailto:wible.biz@kia.com"
                className="ml-1 text-inherit underline"
              >
                wible.biz@kia.com
              </a>
            </span>
          </address>
        </div>
        {/* 카피라이트 */}
        <p className="relative mt-4 before:mb-1 before:block before:h-8 before:bg-[url('/logo/logo_kia.svg')] before:bg-contain before:bg-no-repeat before:content-[''] sm:before:h-12 md:mt-0 md:text-sm md:before:h-14">
          © 2023 KIA CORP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
