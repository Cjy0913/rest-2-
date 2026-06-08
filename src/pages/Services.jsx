import { Link } from 'react-router-dom'
import './Services.css'

const SERVICES = [
  {
    id: 'pc',
    accent: 'royal',
    tag: 'Computer Sales',
    title: '컴퓨터 판매',
    desc:
      '사무용 PC부터 고성능 워크스테이션, 서버, 네트워크 장비까지 — 용도와 예산에 맞는 ' +
      '최적의 하드웨어를 추천하고 직접 구축·설치까지 책임지는 전문 서비스입니다. 2003년 설립 ' +
      '당시부터 이어온 코드블루시스템즈의 핵심 사업입니다.',
    items: [
      '데스크톱·노트북·서버 등 용도별 맞춤 견적 및 공급',
      '사무실·매장 전산 환경 구축 및 네트워크 배선',
      '정기 점검 및 장애 대응 등 사후 유지보수',
      '대량 구매 기업 고객 대상 전담 계약·납품 지원',
    ],
  },
  {
    id: 'sw',
    accent: 'green',
    tag: 'Software Development',
    title: '프로그램 개발',
    desc:
      '반복적인 수작업을 줄이고 데이터를 한 곳에서 관리할 수 있도록, 기업의 업무 흐름에 ' +
      '꼭 맞는 맞춤형 프로그램을 기획부터 개발, 배포, 운영까지 함께합니다. ERP·POS·재고관리 등 ' +
      '다양한 업종의 사내 시스템 구축 경험을 보유하고 있습니다.',
    items: [
      '사내 업무 자동화 프로그램 및 ERP·그룹웨어 개발',
      '매장·물류용 POS, 재고·매출 관리 시스템 구축',
      '데스크톱 및 모바일 앱 연동 솔루션 개발',
      '기존 시스템 분석을 통한 고도화·유지보수',
    ],
  },
  {
    id: 'web',
    accent: 'red',
    tag: 'Web Development',
    title: '웹 개발',
    desc:
      '기업 소개 홈페이지부터 온라인 쇼핑몰, 예약·관리 시스템 같은 복합 웹 서비스까지 — ' +
      '기획과 디자인, 개발, 운영을 하나의 팀이 책임지고 진행합니다. 검색엔진 최적화(SEO)와 ' +
      '반응형 디자인은 기본으로 적용합니다.',
    items: [
      '기업·기관 홈페이지 기획·디자인·퍼블리싱·개발',
      '쇼핑몰 및 예약·회원 관리 등 맞춤형 웹 서비스 구축',
      '반응형 웹 / 검색엔진 최적화(SEO) 기본 적용',
      '운영 단계 콘텐츠 업데이트 및 서버·도메인 관리 지원',
    ],
  },
]

const PROCESS = [
  { step: '01', title: '상담 및 분석', desc: '현재 환경과 요구사항을 함께 점검하고, 가장 합리적인 방향을 제안합니다.' },
  { step: '02', title: '제안 및 견적', desc: '범위와 일정, 비용을 명확히 정리한 제안서를 전달해 드립니다.' },
  { step: '03', title: '구축 및 개발', desc: '전담 인력이 설계부터 구현까지 책임지고 진행 상황을 공유합니다.' },
  { step: '04', title: '운영 및 유지보수', desc: '오픈 이후에도 정기 점검과 기술 지원으로 안정적인 운영을 돕습니다.' },
]

function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow page-hero__eyebrow">Our Services</span>
          <h1>사업영역</h1>
          <p>코드블루시스템즈는 컴퓨터 판매, 프로그램 개발, 웹 개발 세 가지 핵심 영역에서 고객의 비즈니스를 지원합니다.</p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container services-detail__list">
          {SERVICES.map((service, idx) => (
            <article key={service.id} className={`service-row service-row--${service.accent} ${idx % 2 === 1 ? 'is-reverse' : ''}`}>
              <div className="service-row__panel" aria-hidden="true">
                <span className="service-row__index">{String(idx + 1).padStart(2, '0')}</span>
                <span className="service-row__tag">{service.tag}</span>
              </div>
              <div className="service-row__body">
                <h2>{service.title}</h2>
                <p className="service-row__desc">{service.desc}</p>
                <ul className="service-row__items">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Work Process</span>
            <h2>코드블루시스템즈의 진행 절차</h2>
            <p>처음 상담부터 운영 지원까지, 네 단계의 명확한 절차로 프로젝트를 진행합니다.</p>
          </div>
          <ol className="process">
            {PROCESS.map((p) => (
              <li key={p.step} className="process__item">
                <span className="process__step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2>어떤 사업 영역이 필요하신가요?</h2>
            <p>컴퓨터 도입, 프로그램·웹 개발 등 무엇이든 편하게 문의해 주세요. 가장 합리적인 방향을 제안해 드립니다.</p>
          </div>
          <Link to="/contact" className="btn btn-primary">상담 문의하기</Link>
        </div>
      </section>
    </>
  )
}

export default Services
