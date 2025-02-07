import React from 'react';
import Image from 'next/image';

// 헤더 로고
const WibleLogo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="https://wiblebiz.kia.com/static/media/logo_wible_sm.99d79ce8fc4fb2326103.svg"
        alt="Wible Biz Logo"
        width={120}
        height={40}
      />
    </div>
  );
};

export default WibleLogo;
