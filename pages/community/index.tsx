import Button from '@/components/common/Button';
import Title from '@/components/common/Title';
import SearchBar from '@/components/community/SearchBar';
import Link from 'next/link';
import React from 'react';

function Community() {
  return (
    <>
      {/* 검색 부분 */}
      <Title title="커뮤니티">
        <SearchBar />
      </Title>
      <div className="flex justify-end">
        <Link href={'/community/new'}>
          <Button cssType={2}>
            <>글쓰기</>
          </Button>
        </Link>
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
        <tbody className="h-20 ">
          <tr>
            <td>
              제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ제목ㅁ
            </td>
            <td className="text-center">2023-03-06</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Community;
