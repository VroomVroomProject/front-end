import Title from '@/components/common/Title';
import Wrtie from '@/components/community/Wrtie';
import React, { useState, Suspense } from 'react';

function New() {
  return (
    <>
      <Title title="글쓰기"></Title>
      <Wrtie />
    </>
  );
}

export default New;
