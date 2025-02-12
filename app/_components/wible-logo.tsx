import React from 'react';

import Image from 'next/image';

/**
 * 헤더 Wible 로고
 */
const WibleLogo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo/logo_wible_sm.svg"
        alt="Wible Biz Logo"
        width={120}
        height={40}
        className="md:h-full md:w-[160px]"
      />
    </div>
  );
};

export default WibleLogo;
