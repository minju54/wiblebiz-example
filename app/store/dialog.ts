import { create } from 'zustand';

interface IDialog {
  content: string;
  closeButtonText?: string;
}

interface IDialogState {
  dialog: IDialog | null;
  isOpenDialog: boolean;
  actions: {
    showDialog: (props: IDialog) => void;
    closeDialog: () => void;
  };
}

/**
 * Dialog를 관리하는 Zustand 스토어
 * Dialog의 표시, 숨김 및 관련 상태를 관리
 */
export const useDialogStore = create<IDialogState>((set) => ({
  dialog: null,
  isOpenDialog: false,
  // Dialog 상태 변경 함수
  actions: {
    showDialog: (props: IDialog) =>
      set({
        dialog: {
          ...props,
        },
        isOpenDialog: true,
      }),
    closeDialog: () => set({ isOpenDialog: false, dialog: null }),
  },
}));
