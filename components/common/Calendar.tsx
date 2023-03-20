import React, { Fragment } from 'react';
import classNames from 'classnames/bind';

import styles from '@/styles/Calendar.module.css';

const cx = classNames.bind(styles);

function Calendar() {
  const today = new Date();

  const prevLstDate = new Date(today.getFullYear(), today.getMonth(), 0);
  const firstDate = new Date(today.getFullYear(), today.getMonth());
  const lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

  const firstDay = firstDate.getDay();

  const prevDates = new Array(firstDay)
    .fill(0)
    .map((date, i) => prevLstDate.getDate() - i)
    .sort();

  const dates = new Array(lastDate.getDate()).fill(0).map((date, i) => i + 1);

  const curDates = [...prevDates, ...dates];

  return (
    <div className="flex flex-col justify-center items-center w-auto">
      <h2>Calendar</h2>
      <div className={cx('calendar')}>
        <div className="flex">
          <span className={cx('day')}>일</span>
          <span className={cx('day')}>월</span>
          <span className={cx('day')}>화</span>
          <span className={cx('day')}>수</span>
          <span className={cx('day')}>목</span>
          <span className={cx('day')}>금</span>
          <span className={cx('day')}>토</span>
        </div>
        <div className={cx('date')}>
          {curDates.map((date, i) => {
            if ((i + 1) % 7 === 0) {
              return (
                <Fragment key={date + i}>
                  <span>{date}</span>
                  <br></br>
                </Fragment>
              );
            }
            return <span key={date + i}>{date}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
