import { setupServer } from 'msw/node';

import { handlers } from './handlers/handler';

/**
 * 서버 환경 설정
 */
export const server = setupServer(...handlers);
