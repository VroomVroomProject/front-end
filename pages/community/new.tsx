import Title from '@/components/common/Title';
import dynamic from 'next/dynamic';
import React, { useState, Suspense } from 'react';

import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <>...loading</>,
});

function New() {
  const [text, setText] = useState<string>('');
  return (
    <>
      <Title title="글쓰기"></Title>
      <div className="w-full mt-16 h-96">
        <ReactQuill
          style={{ height: '100%' }}
          theme="snow"
          value={text}
          onChange={setText}
          modules={{
            toolbar: [
              [{ header: [1, 2, 3] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
              ],
              ['link', 'image'],
              ['clean'],
            ],
          }}
        />
      </div>
    </>
  );
}

export default New;
