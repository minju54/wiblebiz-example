import { delay, http } from 'msw';
import { faqHandlers } from './faq-handlers';

export const handlers = [
  http.all('*', async () => {
    await delay(100);
  }),
  ...faqHandlers,
];
