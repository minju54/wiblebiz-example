import { http, HttpResponse } from 'msw';
import { categoryList } from '@/app/constant/seaerch';

export const faqHandlers = [
  // 서비스 카테고리 목록 조회 - GET
  http.get('/api/faq/category', ({ request }) => {
    const url = new URL(request.url);
    const tabType = url.searchParams.get('tab');

    let data;
    if (tabType === 'CONSULT') {
      data = categoryList.map(
        (categoryItem) => categoryItem.categoryType === 'SERVICE_CONSULT',
      );
    } else if (tabType === 'USAGE') {
      data = categoryList.map(
        (categoryItem) => categoryItem.categoryType === 'SERVICE_USAGE',
      );
    }

    return HttpResponse.json(data, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),

  // 서비스 도입 카테고리 목록 조회 - GET
  // http.get('/api/faq/category?tab=CONSULT', () => {
  //   return HttpResponse.json(categoryList.CONSULT, {
  //     status: 201,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }),

  // 서비스 이용 카테고리 목록 조회 - GET
  // http.get('/api/faq/category?tab=USAGE', () => {
  //   return HttpResponse.json(categoryList.USAGE, {
  //     status: 201,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }),

  // TODOLIST ADD - POST
  // http.post('/todos', async ({ request }) => {
  //   const requestData = await request.json();
  //   const name = requestData?.toString();

  //   const newTodo = { id: todos.length + 1, name };
  //   todos.push(newTodo);

  //   return HttpResponse.json(todos, { status: 201 });
  // }),
];
