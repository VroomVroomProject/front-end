import React from 'react';

function Community() {
  return (
    <>
      {/* 검색 부분 */}
      <div className="flex justify-center items-center flex-col pt-32">
        <h2 className="text-3xl">커뮤니티</h2>
        <div className="flex py-10">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <button
            type="button"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 ml-2 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            검색
          </button>
        </div>
      </div>
      {/* 커뮤 목록 */}
      <table className="mx-auto my-6 w-full ">
        <colgroup>
          <col width={'60%'} />
          <col width={'20%'} />
        </colgroup>
        <thead className="h-20 bg-gray-200 ">
          <tr>
            <th>제목</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody className="h-20 text-center">
          <tr>
            <td>
              제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ
            </td>
            <td>2023-03-06</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Community;
