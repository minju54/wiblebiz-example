'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { useFAQContext } from '../context/faq-context-provider';
import SearchInfo from './search-info';

interface IServiceSearch {
  question: string | null;
}

/**
 * 검색 조건 컴포넌트
 */
export const ServiceSearch = () => {
  const { setSearchQuestion } = useFAQContext();

  // 검색 조건 기본 값
  const searchDefaultValues = { question: null };

  // form 관련 상태
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { isSubmitted, errors },
  } = useForm<IServiceSearch>({
    mode: 'onChange',
    defaultValues: searchDefaultValues,
  });

  // 검색어
  const searchTerm = watch('question')?.trim();

  // 검색 초기화 버튼 클릭
  const onReset = () => {
    reset(searchDefaultValues);
  };

  // 검색어 모두 지움 버튼 클릭
  const onClear = () => {
    setValue('question', null);
    setSearchQuestion(null);
  };

  // 검색 버튼 클릭
  const onSubmit = () => {
    console.log('isSubmitted', isSubmitted, ', errors:', errors.question);
    setSearchQuestion(searchTerm ?? null);
  };

  // TODO 검색어는 두 글자 입력해주세요
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-5 flex justify-center bg-gray-10 p-4">
        <div className="flex w-[var(--search-bar-width)] border border-midnight-900 bg-white px-[var(--px-md)]">
          <input
            {...register('question', { required: true })}
            className="h-[var(--btn-xlg2)] w-full outline-0"
            placeholder="찾으시는 내용을 입력해주세요."
          />
          <div className="ml-auto flex items-center space-x-3">
            {searchTerm && searchTerm.length > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="h-[var(--ic-md)] w-[var(--ic-md)] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/icons/ic_clear.svg')",
                }}
              />
            )}
            <button
              type="submit"
              onClick={onSubmit}
              className="h-[var(--ic-md)] w-[var(--ic-md)] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/icons/ic_search.svg')",
              }}
            />
          </div>
        </div>
      </div>
      {isSubmitted && !errors.question && <SearchInfo onReset={onReset} />}
    </form>
  );
};
