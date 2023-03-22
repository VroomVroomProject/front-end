import React from 'react';
import { IchildrenProps } from '@/types/init';

interface IButtonProps extends IchildrenProps {
  type?: 'button' | 'submit' | 'reset';
  value?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
function Button({ type, onClick, value, children }: IButtonProps) {
  return (
    <button
      type={type}
      className="focus:outline-none text-white  w-full h-full bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5  py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      onClick={onClick}
      value={value}
    >
      {children}
    </button>
  );
}

export default Button;
