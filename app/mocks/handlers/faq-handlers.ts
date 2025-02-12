import { IServiceItem } from '@/app/types/faq';
import { HttpResponse, http } from 'msw';

import { categoryList } from '../data/category-filter-data';
import { serviceConsultList } from '../data/service-consult-list-data';
import { serviceUsageListData } from '../data/service-usage-list-data';

/**
 * FAQ 관련 API 핸들러를 모아둠
 */
export const faqHandlers = [
  /**
   * 서비스 카테고리 목록 조회
   * - GET
   */
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

  /**
   * FAQ 목록 조회
   * - GET
   */
  http.get('/api/faq', ({ request }) => {
    const url = new URL(request.url);

    // 선택된 탭, 카테고리, 검색조건 파라미터
    const tabId = url.searchParams.get('tab');
    const faqCategoryID = url.searchParams.get('faqCategoryID');
    const question = url.searchParams.get('question');

    // 페이지네이션을 위한 파라미터
    const limit = parseInt(url.searchParams.get('limit') ?? '10', 10) || 10;
    const offset = parseInt(url.searchParams.get('offset') ?? '0', 10) || 0;

    let dataList: IServiceItem[] = [];

    if (tabId === 'SERVICE_CONSULT') {
      dataList = faqCategoryID
        ? serviceConsultList.filter(
            (consultItem) => consultItem.categoryID === faqCategoryID,
          )
        : serviceConsultList;
    } else if (tabId === 'SERVICE_USAGE') {
      dataList = faqCategoryID
        ? serviceUsageListData.filter(
            (consultItem) => consultItem.categoryID === faqCategoryID,
          )
        : serviceUsageListData;
    } else {
      console.error('해당하는 tabId 없음!', tabId);
    }

    if (question) {
      const lowerCaseQuestion = question.toLowerCase();
      dataList = dataList.filter(
        (item) =>
          (tabId === 'SERVICE_USAGE' &&
            item.categoryName.includes(lowerCaseQuestion)) ||
          (item.subCategoryName &&
            item.subCategoryName.includes(lowerCaseQuestion)) ||
          item.question.toLowerCase().includes(lowerCaseQuestion) ||
          item.answer.toLowerCase().includes(lowerCaseQuestion),
      );
    }

    // 페이지네이션 적용
    const paginatedItems = dataList.slice(offset, offset + limit);
    const nextOffset = offset + limit;
    const hasMore = nextOffset < dataList.length;

    return HttpResponse.json(
      {
        items: paginatedItems,
        hasMore,
        nextOffset: hasMore ? nextOffset : null, // 다음 요청을 위한 offset
        totalCount: dataList.length,
      },
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }),
];
