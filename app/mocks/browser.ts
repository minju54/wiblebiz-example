import { setupWorker } from 'msw/browser';

import { handlers } from './handlers/handler';

/**
 * 브라우저 환경 설정
 */
export const worker = setupWorker(...handlers);
