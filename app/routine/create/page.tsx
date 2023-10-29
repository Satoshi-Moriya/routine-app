'use client'

import * as React from 'react';
import styles from './page.module.css'
import Container from '@mui/material/Container';
import { Stack, Button, TextField } from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import DaySelectBox from '@/components/DaySelectBox';
import TimeSelectBox from '@/components/TimeSelectBox';
import InputMultiline from '@/components/MultilineTextField';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Header from '@/components/Header';
import Hooter from '@/components/Footer';


type Inputs = {
  name: string
}

export default function CreateRoutine() {
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

  return (
    <>
      <Header />
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
              render={() => (
                <>
                  <TextField
                    type="text"
                    label="ルーティーン名"
                    error={errors.name !== undefined}
                    helperText={errors.name?.message}
                  />
                  <DaySelectBox />
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TimeSelectBox /><span>〜</span><TimeSelectBox />
                  </Stack>
                  <InputMultiline />
                </>
              )}
            />
            <Grid container justifyContent="center">
              <Grid item xs={5} sx={{mx: 1}}>
                <Link href="/routine" passHref>
                  <Button variant="contained" type="submit" fullWidth>
                    戻る
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={5} sx={{mx: 1}}>
                <Button variant="contained" type="submit" fullWidth>
                  保存
                </Button>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </main>
      <Hooter />
    </>
  )
}
