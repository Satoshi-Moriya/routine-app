'use client'

import * as React from 'react';
import styles from './page.module.css'
import Container from '@mui/material/Container';
import Header from '@/components/Header';
import Hooter from '@/components/Footer';

export default function Home() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="sm">
          <h2 className={styles.title}>ログイン画面</h2>
          {/* {
            user ? (
              <>
                <h3>私は権限を持っています:{user.username}</h3>
                <button onClick={SignOut}>サインアウト</button>
              </>
            ) : <h3>権限がありません</h3>
          } */}
          <a href="/routine">ルーティーン一覧画面へ</a>
        </Container>
      </main>
      <Hooter />
    </>
  )
}
