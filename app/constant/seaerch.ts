import { ICategoryItem, ITab } from '../types/faq';

export const TAB_LIST: ITab[] = [
  { id: 'SERVICE_CONSULT', name: '서비스 도입' },
  { id: 'SERVICE_USAGE', name: '서비스 이용' },
] as const;

export const categoryList: ICategoryItem[] = [
  {
    categoryType: 'SERVICE_CONSULT',
    categoryID: 'PRODUCT',
    name: '서비스 상품',
  },
  {
    categoryType: 'SERVICE_CONSULT',
    categoryID: 'COUNSELING',
    name: '도입 상담',
  },
  {
    categoryType: 'SERVICE_CONSULT',
    categoryID: 'CONTRACT',
    name: '계약',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'SIGN_UP',
    name: '가입문의',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'BUSINESS',
    name: '비즈니스(업무용)',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'ACCIDENT',
    name: '사고/보험',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'RESERVATION',
    name: '예약/결제',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'VEHICLE',
    name: '차량문의',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'REFUEL',
    name: '충전',
  },
  {
    categoryType: 'SERVICE_USAGE',
    categoryID: 'COUPON',
    name: '쿠폰/기타',
  },
];
