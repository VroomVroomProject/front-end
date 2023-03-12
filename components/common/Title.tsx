import React from 'react';
import { IchildrenProps } from '@/types/init';

interface Ititle extends IchildrenProps {
  title: string;
}
function Title({ title, children }: Ititle) {
  return (
    <div className="flex justify-center items-center flex-col pt-32">
      <h2 className="text-3xl">{title}</h2>
      {children}
    </div>
  );
}

export default Title;
