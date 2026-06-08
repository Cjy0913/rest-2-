import { useState } from 'react'
import './Contact.css'

const INQUIRY_TYPES = ['컴퓨터 판매 문의', '프로그램 개발 문의', '웹 개발 문의', '기타 문의']

const INFO = [
  { label: '주소', value: '서울특별시 강남구 테헤란로 123, 7층' },
  { label: '대표전화', value: '02-1234-5678' },
  { label: '이메일', value: 'contact@codeblue-systems.kr' },
  { label: '운영시간', value: '평일 09:00 – 18:00 (주말·공휴일 휴무)' },
]

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  type: INQUIRY_TYPES[0],
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow page-hero__eyebrow">Contact</span>
          <h1>문의하기</h1>
          <p>컴퓨터 판매, 프로그램·웹 개발 등 무엇이든 편하게 남겨주세요. 담당자가 빠르게 확인 후 연락드리겠습니다.</p>
        </div>
      </section>

      <section className="section contact">
        <div className="container contact__grid">
          <div className="contact__info">
            <div className="section-head">
              <span className="eyebrow">Contact Info</span>
              <h2>오시는 길 &amp; 연락처</h2>
            </div>
            <ul className="contact__info-list">
              {INFO.map((item) => (
                <li key={item.label}>
                  <span className="contact__info-label">{item.label}</span>
                  <span className="contact__info-value">{item.value}</span>
                </li>
              ))}
            </ul>
            <div className="contact__map" role="img" aria-label="코드블루시스템즈 사옥 위치 안내">
              <span>서울특별시 강남구 테헤란로 123, 7층</span>
            </div>
          </div>

          <div className="contact__form-wrap">
            <div className="section-head">
              <span className="eyebrow">Inquiry Form</span>
              <h2>온라인 문의</h2>
              <p>아래 양식을 작성해 주시면 영업일 기준 1~2일 내로 답변 드립니다.</p>
            </div>

            {submitted && (
              <div className="contact__notice" role="status">
                문의가 접수되었습니다. 빠른 시일 내에 담당자가 연락드리겠습니다.
              </div>
            )}

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <label>
                  <span>이름 *</span>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                  <span>회사명</span>
                  <input type="text" name="company" value={form.company} onChange={handleChange} />
                </label>
              </div>
              <div className="contact__form-row">
                <label>
                  <span>이메일 *</span>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
                <label>
                  <span>연락처</span>
                  <input type="tel" name="phone" placeholder="010-0000-0000" value={form.phone} onChange={handleChange} />
                </label>
              </div>
              <label>
                <span>문의 유형 *</span>
                <select name="type" value={form.type} onChange={handleChange}>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </label>
              <label>
                <span>문의 내용 *</span>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} required />
              </label>
              <button type="submit" className="btn btn-primary contact__submit">문의 보내기</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
