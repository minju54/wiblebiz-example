import { UseQueryResult, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IFetchData, IUseGetQuery } from '../types/query';

/**
 * 주어진 엔드포인트에서 데이터를 가져오는 비동기 함수
 * @param endpoint 데이터를 가져올 API 엔드포인트
 * @returns 응답 데이터(response.data)를 반환
 */
const fetchData = async ({ endpoint }: IFetchData) => {
  const { data } = await axios.get(endpoint);
  return data; // response.data 반환
};

/**
 * useQuery 훅을 래핑한 커스텀 훅으로 데이터를 가져올 때 사용
 * @param queryKey Tanstack Query의 키로 사용
 * @param endpoint 데이터를 가져올 API 엔드포인트
 * @param gcTime 데이터가 메모리에 유지되는 시간
 * @param staleTime 데이터가 신선한 상태로 간주되는 시간으로 이 시간 동에는 재요청을 하지 않고 캐시된 데이터 사용
 * @param rest Tanstack Query의 useQuery 훅에 전달할 추가 옵션
 * @returns Tanstack Query의 결과 객체
 */
export const useGetQuery = <TData = unknown>({
  queryKey,
  endpoint,
  gcTime,
  staleTime,
  ...rest
}: IUseGetQuery<TData>): UseQueryResult<TData> => {
  return useQuery({
    queryKey,
    queryFn: () => fetchData({ endpoint }),
    gcTime: gcTime ?? 5 * 60 * 1000, // 기본값(5분)
    staleTime: staleTime ?? 0, // 기본값(0분)
    ...rest,
  });
};
