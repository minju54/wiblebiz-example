import React, { ReactNode } from 'react';

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
      {icon && <img src={icon} alt={alt} className={iconClassName} />}
      {children}
    </a>
  );
};

export default LinkButton;
