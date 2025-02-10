'use client';

import React, { useState } from 'react';

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

// 서비스 검색 컴포넌트
export const ServiceSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearInput = () => {
    setSearchTerm('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // 검색 로직 추가 (예: API 호출)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-5 flex justify-center bg-gray-10 p-4"
    >
      <div className="flex w-[var(--search-bar-width)] border border-midnight-900 bg-white px-[var(--px-md)]">
        <input
          className="h-[var(--btn-xlg2)] w-full outline-0"
          placeholder="찾으시는 내용을 입력해주세요."
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="ml-auto flex items-center space-x-3">
          {searchTerm && (
            <button
              type="button"
              className="h-[var(--ic-md)] w-[var(--ic-md)] bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://wiblebiz.kia.com/static/media/ic_clear.e7e65ee27d7e1eee6ae8.svg')",
              }}
              onClick={clearInput}
            />
          )}
          <button type="submit">
            <MagnifyingGlassIcon
              style={{
                width: 'var(--ic-md)',
                height: 'var(--ic-md)',
                background: '',
              }}
            />
          </button>
        </div>
      </div>
    </form>
  );
};
