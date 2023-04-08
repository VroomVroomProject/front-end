import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { v4 } from 'uuid';

const MENU_TYPE = {
  new: 'new',
  old: 'old',
  support: 'support',
};

const newRental = [
  ['차량 렌트', '세부 메뉴'],
  ['서비스 안내', '세부 메뉴'],
];
const oldRental = [
  ['차량 렌트', '세부 메뉴'],
  ['서비스 안내', '세부 메뉴'],
];
const support = [['공지사항'], ['지점안내', '세부 메뉴'], ['고객센터']];

function Header() {
  const [menuList, setMenuList] = useState<string[][]>([]);

  const onMouseMenuEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    if (value === MENU_TYPE.new) {
      setMenuList(newRental);
      return;
    }
    if (value === MENU_TYPE.old) {
      setMenuList(oldRental);
      return;
    }
    if (value === MENU_TYPE.support) {
      setMenuList(support);
    }
  };

  const onMouseMenuLeave = () => {
    setMenuList([]);
  };
  return (
    <header className="relative h-20 bg-white  ">
      <div className="flex">
        <div className="flex">
          <h1 className="font-bold text-3xl text-green-700">VROOM</h1>
          <Image
            src="/images/car-wash.png"
            alt="자동차 로고"
            width={30}
            height={30}
          />
        </div>
        <ul className="flex ml-96 mr-auto text-2xl">
          <li>
            <button
              onMouseEnter={onMouseMenuEnter}
              value={MENU_TYPE.new}
              type="button"
            >
              신차 렌터카
            </button>
          </li>
          <li className="ml-12">
            <button
              onMouseEnter={onMouseMenuEnter}
              value={MENU_TYPE.old}
              type="button"
            >
              중고 렌터카
            </button>
          </li>
          <li className="ml-12">
            <button
              onMouseEnter={onMouseMenuEnter}
              value={MENU_TYPE.support}
              type="button"
            >
              고객 지원
            </button>
          </li>
        </ul>
        <div>
          <Link href="/">
            <Image
              src="/images/ico-mypage.png"
              alt="유저 아이콘"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      {/* 호버 시 상세 메뉴  */}
      <div
        className={
          menuList.length === 0
            ? `absolute flex transition-all h-0 pl-34rem bg-white w-full`
            : 'absolute top-20  h-48 flex pl-34rem transition-all w-full bg-white'
        }
        onMouseLeave={onMouseMenuLeave}
      >
        {menuList.map(menu => (
          <ul key={v4()} className="w-56">
            {menu.map(list => (
              <li key={list} className="first:font-semibold">
                <Link href="/community"> {list}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </header>
  );
}

export default Header;
