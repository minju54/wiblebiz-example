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
