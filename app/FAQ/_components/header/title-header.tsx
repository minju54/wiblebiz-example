import React from 'react';

interface TitleHeaderProps {
  title: string;
}

const TitleHeader = ({ title }: TitleHeaderProps) => {
  return (
    <h2
      className="m-[var(--heading-2-margin)]"
      style={{
        fontSize: 'var(--heading-2)',
        lineHeight: 'var(--line-height-sm)',
      }}
    >
      <b>{title}</b>
    </h2>
  );
};

export default TitleHeader;
