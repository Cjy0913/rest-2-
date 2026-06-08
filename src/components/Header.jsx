import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  { to: '/', label: '홈', end: true },
  { to: '/about', label: '회사소개' },
  { to: '/services', label: '사업영역' },
  { to: '/contact', label: '문의하기' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__bar">
        <NavLink to="/" className="header__logo" onClick={() => setOpen(false)}>
          <span className="header__logo-mark">CB</span>
          <span className="header__logo-text">
            코드블루시스템즈
            <small>CodeBlue Systems · est. 2003</small>
          </span>
        </NavLink>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn btn-primary header__cta" onClick={() => setOpen(false)}>
            상담 문의
          </NavLink>
        </nav>

        <button
          type="button"
          className={`header__toggle ${open ? 'is-open' : ''}`}
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header
