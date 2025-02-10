import { HttpResponse, http } from 'msw';

import { categoryList } from '../data/category-filter-data';
import { serviceUsageListData } from '../data/service-usage-list-data';

export const faqHandlers = [
  // 서비스 카테고리 목록 조회 - GET
  http.get('/api/faq/category', ({ request }) => {
    const url = new URL(request.url);
    const tabId = url.searchParams.get('tab');

    let matchedData;
    if (tabId === 'SERVICE_CONSULT') {
      matchedData = categoryList.filter(
        (categoryItem) => categoryItem.categoryType === 'SERVICE_CONSULT',
      );
    } else if (tabId === 'SERVICE_USAGE') {
      matchedData = categoryList.filter(
        (categoryItem) => categoryItem.categoryType === 'SERVICE_USAGE',
      );
    }

    return HttpResponse.json(matchedData, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),

  /// api/faq?limit=10&offset=0&tab=CONSULT&faqCategoryID=COUNSELING
  //  api/faq?limit=10&offset=20&tab=USAGE
  // FAQ 목록 조회 - GET
  http.get('/api/faq', ({ request }) => {
    const url = new URL(request.url);
    // 선택된 탭, 카테고리 파라미터
    const tabId = url.searchParams.get('tab');
    const faqCategoryID = url.searchParams.get('faqCategoryID');

    // 페이지네이션을 위한 파라미터
    const limit = parseInt(url.searchParams.get('limit') ?? '10', 10) || 10;
    const offset = parseInt(url.searchParams.get('offset') ?? '0', 10) || 0;

    let paginatedItems;

    if (tabId === 'SERVICE_CONSULT') {
      paginatedItems = [];
    } else if (tabId === 'SERVICE_USAGE') {
      paginatedItems = serviceUsageListData.slice(offset, offset + limit);
    }

    if (faqCategoryID) {
      // 세부 카테고리 filter 처리
    }

    return HttpResponse.json(paginatedItems, {
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
