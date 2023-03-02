import React from 'react';
import { useQuery } from 'react-query';

function Init() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json(),
    ),
  );

  if (error) {
    return <div className="flex"> An error has occurred</div>;
  }
  if (isLoading) return <div className="flex">Loading...</div>;
  return (
    <div className="flex">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default Init;
