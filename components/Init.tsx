import { instance } from '@/service/instance';
import React from 'react';
import { useQuery } from 'react-query';

function Init() {
  const { isLoading, error, data } = useQuery(
    'repoData',
    async () =>
      await instance.get(
        'https://api.github.com/repos/tannerlinsley/react-query',
      ),
  );

  if (error) {
    return <div className="flex"> An error has occurred</div>;
  }
  if (isLoading) return <div className="flex">Loading...</div>;
  return (
    <div className="">
      <h2>메인 화면에 구성될 것</h2>
      <h2>인기 차 종류</h2>
      <h2>본인이 즐겨찾기 한 것</h2>
      <h2>커뮤니티 최신2개 ?</h2>
      <h2>공지사항 최신2개 ?</h2>
    </div>
  );
}

export default Init;
