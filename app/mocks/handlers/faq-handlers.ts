import { http, HttpResponse } from 'msw';

interface ICategory {
  categoryID: string;
  name: string;
}

const categoryList: ICategory[] = [
  {
    categoryID: 'PRODUCT',
    name: '서비스 상품',
  },
  {
    categoryID: 'COUNSELING',
    name: '도입 상담',
  },
  {
    categoryID: 'CONTRACT',
    name: '계약',
  },
];

export const faqHandlers = [
  // 서비스 도입 카테고리 목록 조회 - GET
  http.get('/api/faq/category?tab=CONSULT', () => {
    return HttpResponse.json(categoryList, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  // TODOLIST ADD - POST
  // http.post('/todos', async ({ request }) => {
  //   const requestData = await request.json();
  //   const name = requestData?.toString();

  //   const newTodo = { id: todos.length + 1, name };
  //   todos.push(newTodo);

  //   return HttpResponse.json(todos, { status: 201 });
  // }),
];
