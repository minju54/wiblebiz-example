import React from 'react';

import { APP_STORE_URL } from '@/app/constant/url';

import LinkButton from '../button/link-button';

/**
 * 앱 스토어 안내 컴포넌트
 * - 구글 플레이스토어, 앱스토어 링크를 포함
 */
const AppStoreContainer = () => {
  const linkButtonClassName =
    'flex items-center min-h-[48px] w-[264px] flex-1 justify-center rounded-lg border-none bg-white text-sm font-semibold sm:h-[56px] sm:text-base md:w-[296px]';
  const iconClassName = 'w-[24px] sm:w-[28px]';

  return (
    <section className="mt-[42px] flex flex-col flex-wrap items-center justify-center overflow-hidden rounded-2xl bg-gray-10 p-6 sm:p-8">
      <h2 className="mb-[24px] text-xl">
        <b>
          <span className="font-bold text-mint-900">위블 비즈 App</span> 지금
          만나보세요!
        </b>
      </h2>
      <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
        <LinkButton
          icon="/logo/logo_googleplay.svg"
          alt="구글 플레이 로고"
          className={linkButtonClassName}
          iconClassName={iconClassName}
          href={APP_STORE_URL.googlePlay}
        >
          Google Play
        </LinkButton>
        <LinkButton
          icon="/logo/logo_appstore.svg"
          alt="앱 스토어 로고"
          className={linkButtonClassName}
          iconClassName={iconClassName}
          href={APP_STORE_URL.appStore}
        >
          App Store
        </LinkButton>
      </div>
    </section>
  );
};

export default AppStoreContainer;
