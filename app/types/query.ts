import { UseQueryOptions } from '@tanstack/react-query';

export interface IFetchData {
  endpoint: string;
}

export interface IUseGetQuery<TData = unknown>
  extends UseQueryOptions<TData>,
    IFetchData {
  queryKey: unknown[];
  gcTime?: number;
  staleTime?: number;
}

export interface IFetchInfineteData {
  endpoint: string;
  pageParam?: number;
}

// 커스텀 훅 useGetInfiniteQuery 인터페이스
export interface IUseGetInfiniteQuery {
  queryKey: string[];
  endpoint: string;
  gcTime?: number;
  staleTime?: number;
}
