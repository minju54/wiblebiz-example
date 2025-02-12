import React from 'react';

interface IconButtonProps {
  buttonType: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  iconPath: string;
}

/**
 * 아이콘 형태 버튼 컴포넌트
 * @param buttonType 버튼타입
 * @param onClick 클릭 이벤트 함수
 * @param className 추가할 className
 * @param iconPath 아이콘 경로
 */
const IconButton = ({
  buttonType,
  onClick,
  className,
  iconPath,
}: IconButtonProps) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`h-[var(--ic-md)] w-[var(--ic-md)] bg-contain bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${iconPath})`,
      }}
    />
  );
};

export default IconButton;
