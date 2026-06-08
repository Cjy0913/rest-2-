import { Link } from 'react-router-dom'
import './Home.css'

const STATS = [
  { value: '2003', label: '설립 연도 (09.23)' },
  { value: '23년', label: '누적 사업 경력' },
  { value: '3대', label: '핵심 사업 영역' },
  { value: '500+', label: '누적 프로젝트·납품 사례' },
]

const SERVICES = [
  {
    accent: 'royal',
    title: '컴퓨터 판매',
    desc: '데스크톱·노트북·서버 등 용도에 맞는 하드웨어 견적부터 구축, 유지보수까지 한 번에 책임집니다.',
  },
  {
    accent: 'green',
    title: '프로그램 개발',
    desc: '업무 자동화 프로그램, 사내 시스템(ERP·POS) 등 비즈니스에 꼭 맞는 맞춤형 소프트웨어를 개발합니다.',
  },
  {
    accent: 'red',
    title: '웹 개발',
    desc: '기업 홈페이지부터 쇼핑몰, 웹 서비스까지 기획·디자인·개발을 아우르는 웹 솔루션을 제공합니다.',
  },
]

const REASONS = [
  {
    title: '23년의 신뢰',
    desc: '2003년 설립 이후 한 분야에 집중하며 쌓아온 노하우로, 변화하는 IT 환경에도 흔들림 없는 결과를 제공합니다.',
  },
  {
    title: '하드웨어부터 소프트웨어까지',
    desc: '컴퓨터 판매·구축 경험을 바탕으로 한 인프라 이해도와 개발 역량을 함께 갖춘 보기 드문 통합 IT 파트너입니다.',
  },
  {
    title: '맞춤형 사후 관리',
    desc: '납품과 오픈은 끝이 아닌 시작입니다. 운영 단계의 유지보수와 기술 지원까지 전담 인력이 함께합니다.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <span className="eyebrow hero__eyebrow">CodeBlue Systems · since 2003.09.23</span>
          <h1>
            컴퓨터 판매부터 프로그램·웹 개발까지,
            <br />
            <span className="hero__highlight">코드블루시스템즈</span>가 함께합니다
          </h1>
          <p className="hero__lead">
            2003년 9월 23일 문을 연 이래, 하드웨어 공급과 소프트웨어 개발을 아우르는
            통합 IT 솔루션으로 고객의 비즈니스 성장을 뒷받침해 왔습니다.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn-primary">사업영역 살펴보기</Link>
            <Link to="/contact" className="btn btn-outline">상담 문의하기</Link>
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container stats__grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stats__item">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Business</span>
            <h2>세 가지 핵심 사업 영역</h2>
            <p>하드웨어 공급과 소프트웨어 개발 역량을 모두 갖춘 IT 종합 파트너로서, 고객의 단계별 요구에 맞는 솔루션을 제안합니다.</p>
          </div>

          <div className="service-cards">
            {SERVICES.map((service) => (
              <article key={service.title} className={`service-card service-card--${service.accent}`}>
                <span className="service-card__badge" />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reasons">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why CodeBlue</span>
            <h2>코드블루시스템즈를 선택해야 하는 이유</h2>
            <p>2003년부터 이어온 경험과 신뢰를 바탕으로, 작은 문의부터 대규모 구축까지 책임지고 함께합니다.</p>
          </div>

          <div className="reasons__grid">
            {REASONS.map((reason, idx) => (
              <div key={reason.title} className="reasons__item">
                <span className="reasons__num">{String(idx + 1).padStart(2, '0')}</span>
                <h3>{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <div>
            <h2>도입을 고민하고 계신가요?</h2>
            <p>컴퓨터 구매, 프로그램·웹 개발 등 어떤 단계든 코드블루시스템즈가 가장 합리적인 방향을 제안해 드립니다.</p>
          </div>
          <Link to="/contact" className="btn btn-primary cta__btn">지금 상담 신청하기</Link>
        </div>
      </section>
    </>
  )
}

export default Home
