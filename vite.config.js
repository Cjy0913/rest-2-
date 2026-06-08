import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'

// GitHub Pages는 정적 호스팅이라 /about 같은 경로를 직접 요청하면 404를 반환한다.
// index.html을 404.html로도 복사해두면 GitHub Pages가 404 응답 시 이 파일을 서빙하고,
// React Router(BrowserRouter)가 클라이언트에서 해당 경로를 정상적으로 처리한다.
function spaFallback404() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      copyFileSync('docs/index.html', 'docs/404.html')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/rest-2-/',
  plugins: [react(), spaFallback404()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
