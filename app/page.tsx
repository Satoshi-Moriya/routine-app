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
      </AppBar>
    </Box>

      <main className={styles.main}>
        <h2>君のルーティーン一覧</h2>
        <ul>
          <li>
            <p>ドラム練習</p><Button variant='contained'>編集</Button><Button variant='outlined' endIcon={<DeleteIcon/>}>削除</Button>
          </li>
          <li>
            <p>勉強</p><Button variant='contained'>編集</Button><Button variant='outlined' endIcon={<DeleteIcon/>}>削除</Button>
          </li>
        </ul>
        <button>
          <p>新たにルーティーンを追加する</p>
          <span>+</span>
        </button>
      </main>
      <footer>
        <small>© 2023 ルーティーンアプリ</small>
      </footer>
    </>
  )
}
