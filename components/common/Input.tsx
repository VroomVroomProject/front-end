import React, { forwardRef } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  type: string;
  name?: string;
  register?: UseFormRegister<FieldValues>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label?: string;
}

function Input(
  { type, value, onChange, label, name, register }: InputProps,
  ref?: React.LegacyRef<HTMLInputElement>,
) {
  return (
    <>
      {label && <label htmlFor="">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        type={type}
        {...(register && name && { ...register(name) })}
        className="
        p-4
        block
        w-full
        rounded-md
        border-gray-300
        shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    </>
  );
}

export default forwardRef(Input);
