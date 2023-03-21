import useActive from '@/hooks/useActive';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface DateProps {
  date: number;
  className?: string;
}
function DateCell({ date, className }: DateProps) {
  const [active, onActive] = useActive();
  return (
    <span className={active ? `bg-lime-300 ${className}` : className}>
      {date}
    </span>
  );
}

export default DateCell;
