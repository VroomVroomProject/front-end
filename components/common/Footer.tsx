import React from 'react';

function Footer() {
  return (
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
          브룸렌탈㈜ 대표이사 누구야 <br></br>경기도 안양시 동안구 전파로 88
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
  );
}

export default Footer;
