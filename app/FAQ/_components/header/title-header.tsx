import React from 'react';

interface TitleHeaderProps {
  title: string;
}

/**
 * FAQ section 구분을 위한 헤더 컴포넌트
 * @param title 헤더 타이틀 텍스트
 */
const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <header>
      <h2
        className="m-[var(--heading-2-margin)]"
        style={{
          fontSize: 'var(--heading-2)',
          lineHeight: 'var(--line-height-sm)',
        }}
      >
        <b>{title}</b>
      </h2>
    </header>
  );
};

export default TitleHeader;
