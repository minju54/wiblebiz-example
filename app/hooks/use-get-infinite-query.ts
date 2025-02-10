import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import axios from 'axios';

import { IFetchInfineteData, IUseGetInfiniteQuery } from '../types/query';

/**
 * 주어진 엔드포인트에서 데이터를 가져오는 비동기 함수
 * @param endpoint 데이터를 가져올 API 엔드포인트
 * @param pageParam 페이지네이션을 위한 파라미터
 * @returns 응답 데이터(response.data)를 반환
 */
const fetchInfiniteData = async ({
  endpoint,
  pageParam = 0,
}: IFetchInfineteData) => {
  const { data } = await axios.get(endpoint, {
    params: {
      offset: pageParam,
      limit: 10, // 기본값으로 10개씩 가져옴
    },
  });
  return data; // response.data 반환
};

/**
 * useInfiniteQuery 훅을 래핑한 커스텀 훅으로 무한 데이터를 가져올 때 사용
 * @param queryKey Tanstack Query의 키로 사용
 * @param endpoint 데이터를 가져올 API 엔드포인트
 * @param gcTime 데이터가 메모리에 유지되는 시간
 * @param staleTime 데이터가 신선한 상태로 간주되는 시간으로 이 시간 동에는 재요청을 하지 않고 캐시된 데이터 사용
 * @param rest Tanstack Query의 useQuery 훅에 전달할 추가 옵션
 * @returns Tanstack Query의 결과 객체
 */
export const useGetInfiniteQuery = <TData = unknown>({
  queryKey,
  endpoint,
  gcTime,
  staleTime,
  ...rest
}: IUseGetInfiniteQuery<TData>): UseInfiniteQueryResult<TData> => {
  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 0 }) =>
      fetchInfiniteData({ endpoint, pageParam: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextOffset : undefined,
    gcTime: gcTime ?? 5 * 60 * 1000, // 기본값(5분)
    staleTime: staleTime ?? 0, // 기본값(0분)
    ...rest,
  });
};
