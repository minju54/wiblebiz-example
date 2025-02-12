import { ReactNode } from 'react';

/**
 * FAQ 페이지에 전체적으로 적용되는 레이아웃
 */
const FAQLayout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1240px] mx-auto">{children}</div>;
};

export default FAQLayout;
