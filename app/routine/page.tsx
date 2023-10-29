'use client'

import * as React from 'react';
import styles from './page.module.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Header from '@/components/Header';
import Hooter from '@/components/Footer';

// dbからのデータ
const routineItem = ['ドラム練習', '勉強'];

export default function Routine() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="sm">
          <h2 className={styles.title}>君のルーティーン一覧</h2>
          <Grid item xs={12} md={6}>
            <List>
              {
                routineItem.map((text, index) => {
                  return (
                    <ListItem key={index} className={styles.listItem}>
                      <ListItemText
                        primary={text}
                      />
                      <div className={styles.listItemButtons}>
                        <Button variant='contained'>編集</Button>
                        <Button variant='outlined' endIcon={<DeleteIcon/>}>削除</Button>
                      </div>
                    </ListItem>
                  );
                })
              }
            </List>
          </Grid>
          <Link href="/routine/create" passHref>
            <Button variant='contained' endIcon={<AddIcon/>}>追加</Button>
          </Link>
        </Container>
      </main>
      <Hooter />
    </>
  )
}
