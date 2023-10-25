import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'routine app',
  description: '日々のルーティーンをお知らせしてくれるアプリです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
