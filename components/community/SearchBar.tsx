import React from 'react';
import Button from '@/components/common/Button';

function SearchBar() {
  return (
    <div className="flex py-10">
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 w-28  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">전체</option>
        <option value="">제목</option>
        <option value="">내용</option>
      </select>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:border-blue-500  focus:border-blue-500 ml-4 w-96 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="검색어를 입력해주세요."
      />
      <div className="ml-2">
        <Button>
          <>검색</>
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
