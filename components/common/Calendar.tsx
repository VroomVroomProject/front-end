import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '@/styles/Calendar.module.css';
import Button from './Button';

const cx = classNames.bind(styles);

function Calendar() {
  const [count, setCount] = useState<number>(0);
  const today = new Date();

  const prevLstDate = new Date(
    today.getFullYear(),
    today.getMonth() + count,
    0,
  );
  const firstDate = new Date(today.getFullYear(), today.getMonth() + count);
  const lastDate = new Date(
    today.getFullYear(),
    today.getMonth() + 1 + +count,
    0,
  );

  const month = firstDate.getMonth() + 1;
  const firstDay = firstDate.getDay();

  const prevDates = new Array(firstDay)
    .fill(0)
    .map((date, i) => ({
      month: prevLstDate.getMonth() + 1,
      date: prevLstDate.getDate() - i,
    }))
    .sort();

  const dates = new Array(lastDate.getDate()).fill(0).map((date, i) => ({
    month: month,
    date: i + 1,
  }));

  const onMinusCount = () => {
    setCount(p => p - 1);
  };
  const onPlusCount = () => {
    setCount(p => p + 1);
  };

  return (
    <div className="flex flex-col justify-center w-auto">
      <h2>Calendar</h2>
      <div className="flex justify-between">
        <button onClick={onMinusCount}>{'<-'}</button>
        <h2>{month}</h2>
        <button onClick={onPlusCount}>{'->'}</button>
      </div>
      <div className={cx('calendar')}>
        <div className="flex mb-10">
          <span className={cx('day')}>일</span>
          <span className={cx('day')}>월</span>
          <span className={cx('day')}>화</span>
          <span className={cx('day')}>수</span>
          <span className={cx('day')}>목</span>
          <span className={cx('day')}>금</span>
          <span className={cx('day')}>토</span>
        </div>
        <div className={cx('date')}>
          {prevDates.map(date => (
            <span
              className={'text-gray-300 '}
              defaultValue={date.date}
              onClick={e => {
                console.dir(e.target);
              }}
            >
              <>{date.date}</>
            </span>
          ))}
          {dates.map(date => (
            <span>
              <>{date.date}</>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
