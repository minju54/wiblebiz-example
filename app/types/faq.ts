import { Dispatch, SetStateAction } from 'react';

// 카테고리 타입 (서비스 도입, 서비스 이용)
export type ICategoryType = 'SERVICE_CONSULT' | 'SERVICE_USAGE';

// 카테고리 아이템
export interface ICategoryItem {
  categoryType?: ICategoryType;
  categoryID: string;
  name: string;
}

// 탭 타입
export interface ITab {
  id: ICategoryType;
  name: string;
}

// FAQ Context 타입
export interface IFaqContext {
  selectedTab: ITab;
  setSelectedTab: Dispatch<SetStateAction<ITab>>;
  selectedCategory: ICategoryItem | null;
  setSelectedCategory: Dispatch<SetStateAction<ICategoryItem | null>>;
}
