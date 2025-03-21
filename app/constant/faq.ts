import { ITab } from '../types/faq';

export const PROCESS_INFORMATION = [
  {
    title: '문의 등록',
    content: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    title: '관리자 설정',
    content: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    title: '임직원 가입',
    content: '사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.',
  },
  {
    title: '서비스 이용',
    content: '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
  },
] as const;

export const TAB_LIST: ITab[] = [
  { id: 'SERVICE_CONSULT', name: '서비스 도입' },
  { id: 'SERVICE_USAGE', name: '서비스 이용' },
] as const;
