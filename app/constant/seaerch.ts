export const TAB_LIST = [
  { id: 'serviceIntroduction', name: '서비스 도입' },
  { id: 'serviceContent', name: '서비스 내용' },
] as const;

export const SEARCH_FILTER = {
  serviceIntroduction: [
    { id: '', name: '서비스 상품' },
    { id: '', name: '도입 상담' },
    { id: '', name: '계약' },
    { id: '', name: '서비스 상품' },
  ],
  serviceContent: [
    { id: '', name: '가입 문의' },
    { id: '', name: '비즈니스(업무용)' },
    { id: '', name: '사고/보험' },
    { id: '', name: '예약/결제' },
    { id: '', name: '차량문의' },
    { id: '', name: '충전' },
    { id: '', name: '쿠폰/기타' },
  ],
} as const;
