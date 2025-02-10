import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import axios from 'axios';

import { IFetchInfineteData, IUseGetInfiniteQuery } from '../types/query';

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

export const useGetInfiniteQuery = <TData = unknown>({
  queryKey,
  endpoint,
  gcTime,
  staleTime,
  ...rest
}: IUseGetInfiniteQuery<TData>): UseInfiniteQueryResult<TData> => {
  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 0 }) => fetchInfiniteData({ endpoint, pageParam }),
    // getNextPageParam: (lastPage, pages) => {
    //   const morePagesExist = lastPage.items.length === 10;
    //   if (!morePagesExist) return undefined;
    //   return pages.length * 10;
    // },
    gcTime: gcTime ?? 5 * 60 * 1000, // 기본값(5분)
    staleTime: staleTime ?? 0, // 기본값(0분)
    ...rest,
  });
};
