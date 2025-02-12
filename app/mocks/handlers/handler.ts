import { delay, http } from 'msw';

import { faqHandlers } from './faq-handlers';

/**
 * API 요청을 수행하는 MSW 핸들러
 */
export const handlers = [
  http.all('*', async () => {
    await delay(100);
  }),
  ...faqHandlers,
];
