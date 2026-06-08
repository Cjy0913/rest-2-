# 코드블루시스템즈 (CodeBlue Systems) 회사 사이트

2003년 9월 23일 설립한 IT 기업(컴퓨터 판매 · 프로그램 개발 · 웹 개발)의 회사 소개 사이트입니다.

## 기술 스택

- React 19 + Vite
- React Router (페이지 라우팅)

## 컬러 가이드

- 메인: 다크블루 `#0b1e3d`, 로열블루 `#3b5bdb`
- 포인트: 다크그린 `#1b5e3f`, 다크레드 `#7a2530`

(컬러 변수는 [src/index.css](src/index.css)의 `:root`에 정의되어 있습니다.)

## 개발 시작하기

```bash
npm install
npm run dev
```

## 페이지 구성

- `/` 홈
- `/about` 회사소개
- `/services` 사업영역
- `/contact` 문의하기

## 빌드 & 배포

```bash
npm run build    # dist/ 에 정적 파일 생성
npm run deploy   # gh-pages 브랜치로 배포 (GitHub Pages)
```

배포 주소: https://Cjy0913.github.io/rest-2-/
(GitHub 저장소 Settings → Pages → Source를 `gh-pages` 브랜치로 설정해야 합니다.)

## 개발 기록

진행 상황은 [docs/개발일지.md](docs/개발일지.md)에 기록합니다.
