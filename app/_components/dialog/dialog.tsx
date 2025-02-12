'use client';

import React from 'react';

import { useDialogStore } from '@/app/store/dialog';

/**
 * 다이어로그 컴포넌트
 */
const Dialog = () => {
  // zustand를 통해 전역으로 다이얼로그에 대한 상태관리 처리
  const { dialog, isOpenDialog } = useDialogStore();
  const { closeDialog } = useDialogStore((state) => state.actions);

  if (!dialog) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
      <dialog
        className={`flex bg-white max-h-[calc(100%-var(--side-padding)*2)] max-w-[calc(100%-var(--side-padding)*2)] min-w-[320px]
        w-auto px-5 items-center justify-center sm:mx-[48px] md2:py-[32px] md2:w-fit md2:ml-[35%] lg:py-[40px]`}
        open={isOpenDialog}
      >
        <div className="mt-[30px] px-0 pb-5 md2:px-8 lg:px-10">
          <p className="text-sm sm:text-base md:text-lg">{dialog.content}</p>
          <div className="flex justify-center mt-[var(--px-md)]">
            <button
              type="button"
              className="text-base h-[48px] border border-midnight-900 min-w-[120px] md2:text-lg md2:h-[52px] hover:bg-gray-10"
              onClick={closeDialog}
            >
              <b>{dialog.closeButtonText ?? '확인'}</b>
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dialog;
