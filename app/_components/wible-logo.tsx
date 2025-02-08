import React from 'react';
import Image from 'next/image';

// 헤더 로고
const WibleLogo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/icons/logo_wible_sm.svg"
        alt="Wible Biz Logo"
        className="h-[40px] w-[120px]"
      />
    </div>
  );
};

export default WibleLogo;
