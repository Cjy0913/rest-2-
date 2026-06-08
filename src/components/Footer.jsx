import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="footer__logo-mark">CB</span>
            코드블루시스템즈
          </span>
          <p>
            2003년 9월 23일 설립 이래, 컴퓨터 판매부터 프로그램·웹 개발까지
            한 자리에서 책임지는 IT 파트너입니다.
          </p>
        </div>

        <div className="footer__col">
          <h4>바로가기</h4>
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><Link to="/about">회사소개</Link></li>
            <li><Link to="/services">사업영역</Link></li>
            <li><Link to="/contact">문의하기</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>사업영역</h4>
          <ul>
            <li>컴퓨터 판매</li>
            <li>프로그램 개발</li>
            <li>웹 개발</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>오시는 길</h4>
          <ul>
            <li>서울특별시 강남구 테헤란로 123, 7층</li>
            <li>Tel. 02-1234-5678</li>
            <li>Email. contact@codeblue-systems.kr</li>
            <li>평일 09:00 – 18:00 (주말·공휴일 휴무)</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>(주)코드블루시스템즈 · 설립 2003.09.23 · 사업자등록번호 123-45-67890</span>
          <span>&copy; {year} CodeBlue Systems. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
