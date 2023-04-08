import Title from '@/components/common/Title';
import React from 'react';
import DOMPurify from 'dompurify';

function Detail() {
  const markdown: string = `<p>dasdsadsadqwewqe</p>`;
  return (
    <>
      <Title title="Community"></Title>
      <div>
        <h3>제목이다</h3>
        <span>관리자</span>
        <span>2023-03-17</span>
        <span>조회: 00</span>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(markdown) }}
      ></div>
    </>
  );
}

export default Detail;
