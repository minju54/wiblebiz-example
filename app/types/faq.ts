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
  searchQuestion: string | null;
  setSearchQuestion: Dispatch<SetStateAction<string | null>>;
  searchResultCount: number;
  setSearchResultCount: Dispatch<SetStateAction<number>>;
}

// 서비스 아이템 인터페이스
export interface IServiceItem {
  id: number;
  categoryName: string;
  categoryID: string;
  subCategoryName?: string;
  question: string;
  answer: string;
}

export interface IFaqServiceList {
  items: IServiceItem[];
  hasMore: boolean;
  nextOffset?: number;
  totalCount: number;
}

// FAQ 서비스 목록 Response 타입
export interface IFaqServiceResponse {
  pageParams: number[];
  pages: IFaqServiceList[];
}
