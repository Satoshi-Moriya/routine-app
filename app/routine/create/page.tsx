'use client'

import * as React from 'react';
import styles from './page.module.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Container from '@mui/material/Container';
import { Stack, TextField, Button } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type Inputs = {
  name: string
}

const HOUR_24 = 24;

export const createNumberArray = (num: number): number[] => Array.from({ length: num }, (_, index) => index);

export default function CreateRoutine() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    // defaultValues: { name: 'longbridgeyuk' }
  })

  const validationRules = {
    name: {
      required: '名前を入力してください。',
      minLength: { value: 4, message: '4文字以上で入力してください。' }
    }
  }

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit: ${data.name}`)
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
          <h2 className={styles.title}>ルーティーン登録</h2>
          <Stack component="form" noValidate
            onSubmit={handleSubmit(onSubmit)}
            spacing={2} sx={{ mx: 'auto', mt: 4, width: '400px' }}
            >
            <Controller
              name="name"
              control={control}
              rules={validationRules.name}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    type="text"
                    label="ルーティーン名"
                    error={errors.name !== undefined}
                    helperText={errors.name?.message}
                  />
                  <Select
                    value={age}
                    label="頻度"
                    onChange={handleChange}
                  >
                    <MenuItem value={"allDay"}>毎日</MenuItem>
                    <MenuItem value={"sun"}>日曜日</MenuItem>
                    <MenuItem value={"mon"}>月曜日</MenuItem>
                    <MenuItem value={"tue"}>火曜日</MenuItem>
                    <MenuItem value={"wed"}>水曜日</MenuItem>
                    <MenuItem value={"thr"}>木曜日</MenuItem>
                    <MenuItem value={"fri"}>金曜日</MenuItem>
                    <MenuItem value={"sat"}>土曜日</MenuItem>
                  </Select>
                </>
              )}
            />
            <Box className={styles.timeTable}>
              {
                createNumberArray(HOUR_24).map((time, index) => {
                  return (
                    <div key={index} className={styles.timeBlock}>
                      <div className={styles.timeNum}>{time}時</div>
                      <div className={styles.timeClickArea}></div>
                    </div>
                  );
                })
              }
            </Box>
            <div className={styles.createButtonWrapper}>
              <Button variant="contained" type="submit" className={styles.createButton}>
                登録
              </Button>
            </div>
          </Stack>
        </Container>
      </main>
      <footer className={styles.footer}>
        <small>© 2023 ルーティーンアプリ</small>
      </footer>
    </>
  )
}
