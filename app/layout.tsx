import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OK 솔루션 - AI 기반 스마트 인사관리',
  description: 'AI 기반 스마트 인사관리로 더 나은 조직 문화를 만들어가세요. 성과평가부터 근태관리까지, 통합 HR 솔루션',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 