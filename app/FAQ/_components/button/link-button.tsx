import React, { ReactNode } from 'react';

import Image from 'next/image';

type LinkButtonProps = {
  icon?: string;
  alt: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  iconClassName?: string;
  children: ReactNode;
  onClick?: () => void;
};

/**
 * 링크 요소를 포함한 버튼 컴포넌트
 * @param icon icon 경로
 * @param alt 이미지 alt 속성
 * @param href 하이퍼링크의 목적지 UR
 * @param target 링크를 클릭했을 때 링크된 문서가 어디에서 열릴지를 지정 (기본값은 _blank)
 * @param rel 링크된 문서와 현재 문서 간의 관계를 명시 (기본값은 noreferrer)
 * @param className 버튼 추가 className
 * @param iconClassName 아이콘 버튼 추가 className
 */
const LinkButton = ({
  icon,
  alt,
  href,
  target = '_blank',
  rel = 'noreferrer',
  className,
  iconClassName,
  children,
  onClick,
  ...rest
}: LinkButtonProps) => {
  return (
    <a
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >
      {icon && (
        <Image
          src={icon}
          alt={alt}
          className={iconClassName}
          width={24}
          height={24}
        />
      )}
      {children}
    </a>
  );
};

export default LinkButton;
