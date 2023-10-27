'use client'

import * as React from 'react';
import styles from './page.module.css'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';

// dbからのデータ
const routineItem = ['ドラム練習', '勉強'];

export default function Home() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                ルーティーンアプリ
              </Typography>
                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>アカウント設定</MenuItem>
                    <MenuItem onClick={handleClose}>ログアウト</MenuItem>
                  </Menu>
                </div>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
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
          <button>
            <p>新たにルーティーンを追加する</p>
            <span>+</span>
          </button>
        </Container>
      </main>
      <footer className={styles.footer}>
        <small>© 2023 ルーティーンアプリ</small>
      </footer>
    </>
  )
}
