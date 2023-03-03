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
    <div className="flex">
      <h2>테스트다 </h2>
    </div>
  );
}

export default Init;
