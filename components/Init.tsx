import React from 'react';
import { useQuery } from 'react-query';
import instance from '@/service/instance';

function Init() {
  const { isLoading, error } = useQuery('repoData', async () =>
    instance.get('https://api.github.com/repos/tannerlinsley/react-query'),
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
