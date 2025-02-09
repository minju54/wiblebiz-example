import React from 'react';

const FAQHeader = () => {
  return (
    <div className="flex flex-col items-center h-[var(--h1-height)] justify-center">
      <h1 className="font-bold" style={{ fontSize: 'var(--h1-fsize)' }}>
        자주 묻는 질문
      </h1>
      <em style={{ fontSize: 'var(--h1-fsize-sm)' }}>
        궁금하신 내용을 빠르게 찾아보세요.
      </em>
    </div>
  );
};

export default FAQHeader;
