import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IMenuState {
  selectedGnbMenuId: string | null;
  setSelectedGnbMenuId: (id: string) => void;
}

/**
 * 메뉴 관련 상태를 저장하는 스토어
 */
const useMenuStore = create<IMenuState>()(
  persist(
    (set) => ({
      // 선택된 GnB 메뉴 ID 저장
      selectedGnbMenuId: null,
      // 선택된 GNB 메뉴 ID 설정
      setSelectedGnbMenuId: (id: string) => set({ selectedGnbMenuId: id }),
    }),
    {
      name: 'menu-storage', // 로컬 스토리지에 저장
    },
  ),
);

export default useMenuStore;
