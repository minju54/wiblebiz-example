import React, { ReactNode } from 'react';

type LinkButtonProps = {
  icon: string;
  alt: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
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
  children,
  onClick,
  ...rest
}: LinkButtonProps) => {
  const aTagClassName =
    'cursor-pointer flex border border-midnight-900 min-h-[var(--btn-xxlg)] items-center  sm:justify-center';

  return (
    <a
      className={`${aTagClassName} ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      {...rest}
    >
      <img src={icon} alt={alt} className="mr-2 w-[32px]" />
      {children}
    </a>
  );
};

export default LinkButton;
