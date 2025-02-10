import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

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

export interface IUseGetInfiniteQuery<TData>
  extends UseInfiniteQueryOptions<TData> {
  queryKey: string[];
  endpoint: string;
  gcTime?: number;
  staleTime?: number;
}
