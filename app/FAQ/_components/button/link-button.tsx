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

const LinkButton = ({
  icon,
  alt,
  href,
  target,
  rel,
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
