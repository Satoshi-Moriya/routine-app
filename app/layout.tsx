'use client'

// import type { Metadata } from 'next'
import './globals.css'

import { Amplify } from 'aws-amplify';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css'

import awsExports from '../src/aws-exports.js';
Amplify.configure(awsExports);

// export const metadata: Metadata = {
//   title: 'routine app',
//   description: '日々のルーティーンをお知らせしてくれるアプリです。',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="ja">
        <body>
          <Authenticator>
            {children}
          </Authenticator>
        </body>
      </html>
  )
}
