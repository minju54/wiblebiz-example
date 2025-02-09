import React, { ReactNode } from 'react';

type LinkButtonProps = {
  icon: string;
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
  const aTagClassName = 'cursor-pointer flex items-center sm:justify-center';

  return (
    <a
      className={`${aTagClassName} ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >
      <img src={icon} alt={alt} className={iconClassName} />
      {children}
    </a>
  );
};

export default LinkButton;
