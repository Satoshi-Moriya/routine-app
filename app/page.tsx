'use client'

import * as React from 'react';
import styles from './page.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Home() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ルーティーンアプリ
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <main className={styles.main}>
        <Container maxWidth="sm">
          <h2 className={styles.title}>ログイン画面</h2>
          <a href="/routine">ルーティーン一覧画面へ</a>
        </Container>
      </main>
      <footer className={styles.footer}>
        <small>© 2023 ルーティーンアプリ</small>
      </footer>
    </>
  )
}
