import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import 'react-quill/dist/quill.snow.css';
import Button from '@/components/common/Button';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <>...loading</>,
});

function Wrtie() {
  const [title, setTitle] = useState<string>('');
  const [contents, setContents] = useState<string>('');

  return (
    <div className="w-full mt-16 ">
      <div className="mb-4">
        <input
          value={title}
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-visible:border-blue-500  focus:border-blue-500  w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="제목을 입력하세요."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </div>
      <div style={{ height: '500px' }}>
        <ReactQuill
          style={{ height: '90%' }}
          theme="snow"
          value={contents}
          onChange={setContents}
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
      <div className="mt-4">
        <Button cssType={2}>
          <>Save</>
        </Button>
      </div>
    </div>
  );
}

export default Wrtie;
