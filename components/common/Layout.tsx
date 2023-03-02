import { IchildrenProps } from '@/types/init';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Layout({ children }: IchildrenProps) {
  return (
    <div className="container mx-auto py-10  font-extrabold">
      <header>
        <div className="flex ">
          <div className="flex">
            <h1 className="font-bold text-3xl text-green-700">VROOM</h1>
            <Image
              src={'/images/car-wash.png'}
              alt="자동차 로고"
              width={30}
              height={30}
            />
          </div>
          <ul className="flex mx-auto text-2xl">
            <li>
              <Link href={''}>신차 렌터카</Link>
            </li>
            <li className="ml-10">
              <Link href={''}>신차 렌터카</Link>
            </li>
            <li className="ml-10">
              <Link href={''}>중고 렌터카</Link>
            </li>
            <li className="ml-10">
              <Link href={''}>고객 지원</Link>
            </li>
          </ul>
          <div>
            <Image
              src={'/images/ico-mypage.png'}
              alt="유저 아이콘"
              width={30}
              height={30}
            />
          </div>
        </div>
      </header>
      {children}
      <footer className="flex justify-between">
        <div>
          <h3 className="text-green-700">VROOM</h3>
          <ul className="flex">
            <li>우리소개</li>
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>이메일주소무단수집거부</li>
            <li>공지사항</li>
            <li>사이트맵</li>
          </ul>
          <div className="text-xs">
            롯데렌탈㈜ 대표이사 김현수 <br></br>경기도 안양시 동안구 전파로 88
            신원비젼타워 8층 / 서울본사: 서울시 강남구 테헤란로 422 KT타워 6~9층
            <br></br>
            사업자등록번호 : 214-87-79183 / 통신판매업신고번호 :
            제2010-경기안양-420호
          </div>
        </div>
        <div>
          <p>고객센터</p>
          <p>(전화번호)</p>
          <p>평일 09:00 ~ 18:00</p>
          <p>단, 사고처리 문의는 24시간 가능 </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
