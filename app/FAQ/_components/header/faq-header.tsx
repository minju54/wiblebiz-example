import React from 'react';

const FAQHeader = () => {
  return (
    <div className="flex h-[var(--h1-height)] flex-col items-center justify-center">
      <h1 style={{ fontSize: 'var(--h1-fsize)' }}>
        <b>자주 묻는 질문</b>
      </h1>
      <em style={{ fontSize: 'var(--h1-fsize-sm)' }} className="not-italic">
        궁금하신 내용을 빠르게 찾아보세요.
      </em>
    </div>
  );
};

export default FAQHeader;
