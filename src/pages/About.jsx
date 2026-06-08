import { Link } from 'react-router-dom'
import './About.css'

const OVERVIEW = [
  { label: '회사명', value: '(주)코드블루시스템즈 (CodeBlue Systems Co., Ltd.)' },
  { label: '설립일', value: '2003년 9월 23일' },
  { label: '대표자', value: '대표이사 김코드' },
  { label: '주요 사업', value: '컴퓨터 판매, 프로그램 개발, 웹 개발' },
  { label: '소재지', value: '서울특별시 강남구 테헤란로 123, 7층' },
  { label: '연락처', value: 'Tel. 02-1234-5678  ·  Email. contact@codeblue-systems.kr' },
]

const HISTORY = [
  { year: '2003', text: '9월 23일 컴퓨터 판매 전문 업체로 설립' },
  { year: '2008', text: '소프트웨어 개발 사업부 신설, 사내 업무용 프로그램 개발 착수' },
  { year: '2013', text: '웹 개발팀 출범 및 기업용 홈페이지·쇼핑몰 구축 사업 확장' },
  { year: '2018', text: '법인 전환 및 강남 사옥 이전, 기술연구소 설립' },
  { year: '2023', text: '창립 20주년, 누적 프로젝트 500건 돌파' },
  { year: '2026', text: '클라우드·웹 솔루션 라인업 강화로 사업 영역 확대 중' },
]

const VALUES = [
  { accent: 'royal', title: '신뢰', desc: '2003년부터 변함없이 약속한 일정과 품질을 지켜온 23년의 신용을 가장 큰 자산으로 생각합니다.' },
  { accent: 'green', title: '전문성', desc: '하드웨어부터 소프트웨어까지, 전 영역을 이해하는 통합 기술력으로 최적의 해법을 제시합니다.' },
  { accent: 'red', title: '동행', desc: '구축은 시작일 뿐입니다. 운영과 성장의 모든 과정에 책임감을 갖고 함께합니다.' },
]

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow page-hero__eyebrow">About Us</span>
          <h1>회사소개</h1>
          <p>2003년 9월 23일, 작은 컴퓨터 판매점에서 시작해 프로그램·웹 개발까지 영역을 넓혀온 코드블루시스템즈를 소개합니다.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about__intro">
          <div className="section-head">
            <span className="eyebrow">Greeting</span>
            <h2>고객과 함께 성장해온 23년</h2>
          </div>
          <div className="about__intro-text">
            <p>
              안녕하십니까, 코드블루시스템즈입니다. 저희는 2003년 9월 23일,
              컴퓨터 판매를 전문으로 하는 작은 매장에서 출발했습니다.
              이후 빠르게 변화하는 IT 환경 속에서 고객이 필요로 하는 것은
              단순한 제품 판매가 아니라 비즈니스를 함께 고민하는 파트너라는
              사실을 깨닫고, 프로그램 개발과 웹 개발로 사업 영역을 확장해왔습니다.
            </p>
            <p>
              지금의 코드블루시스템즈는 컴퓨터 하드웨어 공급, 맞춤형 프로그램 개발,
              웹사이트·웹서비스 구축까지 아우르는 통합 IT 기업으로 성장했습니다.
              앞으로도 고객의 입장에서 가장 합리적인 해법을 고민하는 회사가
              되겠습니다. 감사합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section about__overview-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Company Overview</span>
            <h2>회사 개요</h2>
          </div>
          <dl className="overview">
            {OVERVIEW.map((row) => (
              <div className="overview__row" key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section about__values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Core Values</span>
            <h2>코드블루시스템즈가 지키는 약속</h2>
          </div>
          <div className="values">
            {VALUES.map((value) => (
              <div key={value.title} className={`values__item values__item--${value.accent}`}>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">History</span>
            <h2>걸어온 길</h2>
            <p>2003년 설립 이후 지금까지, 코드블루시스템즈가 쌓아온 주요 발자취입니다.</p>
          </div>
          <ol className="timeline">
            {HISTORY.map((item) => (
              <li key={item.year} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <span className="timeline__text">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <h2>코드블루시스템즈와 함께할 준비가 되셨나요?</h2>
          <Link to="/contact" className="btn btn-primary">문의하러 가기</Link>
        </div>
      </section>
    </>
  )
}

export default About
