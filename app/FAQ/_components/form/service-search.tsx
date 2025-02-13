'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDialogStore } from '@/app/store/dialog';

import IconButton from '../button/icon-button';
import { useFAQContext } from '../context/faq-context-provider';
import SearchInfo from './search-info';

interface IServiceSearch {
  question: string | null;
}

/**
 * 검색 조건 컴포넌트
 */
export const ServiceSearch = () => {
  const { setSearchQuestion, setSelectedCategory } = useFAQContext();

  const { showDialog } = useDialogStore((state) => state.actions); // dialog 상태 관리

  const [isVisibleSearchInfo, setIsVisibleSearchInfo] =
    useState<boolean>(false); // 검색 조건 보여여짐을 관리하는 상태 변수

  const searchDefaultValues = { question: null }; // 검색 조건 기본 값

  // form 관련 상태
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IServiceSearch>({
    mode: 'onSubmit',
    defaultValues: searchDefaultValues,
  });

  const searchTerm = watch('question')?.trim(); // 검색어

  // 검색 초기화 버튼 클릭
  const onReset = () => {
    reset(searchDefaultValues);
    setSearchQuestion(null); // 검색어 초기화
    setSelectedCategory(null); // 카테고리 초기화
    setIsVisibleSearchInfo(false);
  };

  // 검색어 모두 지움 버튼 클릭
  const onClear = () => {
    setValue('question', null);
    setSearchQuestion(null); // 검색어 초기화
  };

  // 검색 버튼 클릭
  const onSubmit = () => {
    setSearchQuestion(searchTerm ?? null);

    if (searchTerm && searchTerm?.length > 0) {
      setIsVisibleSearchInfo(true);
    } else {
      setIsVisibleSearchInfo(false);
    }
  };

  // 검색 유효성 검사 실패
  const onError = () => {
    if (errors.question && searchTerm?.length !== 0) {
      showDialog({
        content: errors.question.message ?? '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="flex flex-col">
      <div className="mb-5 flex justify-center bg-gray-10 p-4">
        <div className="flex w-[var(--search-bar-width)] border border-midnight-900 bg-white px-[var(--px-md)]">
          <input
            {...register('question', {
              minLength: {
                value: 2,
                message: '검색어는 2글자 이상 입력해주세요.',
              },
            })}
            className="h-[var(--btn-xlg2)] w-full outline-0"
            placeholder="찾으시는 내용을 입력해주세요."
          />
          <div className="ml-auto flex items-center space-x-3">
            {searchTerm && searchTerm.length > 0 && (
              <IconButton
                buttonType="button"
                onClick={onClear}
                iconPath="/icons/ic_clear.svg"
              />
            )}
            <IconButton buttonType="submit" iconPath="/icons/ic_search.svg" />
          </div>
        </div>
      </div>
      {isVisibleSearchInfo && <SearchInfo onReset={onReset} />}
    </form>
  );
};
