'use client'

import * as React from 'react';
import styles from './page.module.css'
import Container from '@mui/material/Container';
import { Stack, Button } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Header from '@/components/Header';
import Hooter from '@/components/Footer';

enum FrequencyEnum {
  all="all",
  sun="sun",
  mon="mon",
  tue="tue",
  wed="wed",
  thr="thr",
  fri="fri",
  sat="sat",
}

enum TimeEnum {
   timeEnum1="00:00",
   timeEnum2="00:15",
   timeEnum3="00:30",
   timeEnum4="00:45",
   timeEnum5="01:00",
   timeEnum6="01:15",
   timeEnum7="01:30",
   timeEnum8="01:45",
   timeEnum9="02:00",
   timeEnum10="02:15",
   timeEnum11="02:30",
   timeEnum12="02:45",
   timeEnum13="03:00",
   timeEnum14="03:15",
   timeEnum15="03:30",
   timeEnum16="03:45",
   timeEnum17="04:00",
   timeEnum18="04:15",
   timeEnum19="04:30",
   timeEnum20="04:45",
   timeEnum21="05:00",
   timeEnum22="05:15",
   timeEnum23="05:30",
   timeEnum24="05:45",
   timeEnum25="06:00",
   timeEnum26="06:15",
   timeEnum27="06:30",
   timeEnum28="06:45",
   timeEnum29="07:00",
   timeEnum30="07:15",
   timeEnum31="07:30",
   timeEnum32="07:45",
   timeEnum33="08:00",
   timeEnum34="08:15",
   timeEnum35="08:30",
   timeEnum36="08:45",
   timeEnum37="09:00",
   timeEnum38="09:15",
   timeEnum39="09:30",
   timeEnum40="09:45",
   timeEnum41="10:00",
   timeEnum42="10:15",
   timeEnum43="10:30",
   timeEnum44="10:45",
   timeEnum45="11:00",
   timeEnum46="11:15",
   timeEnum47="11:30",
   timeEnum48="11:45",
   timeEnum49="12:00",
   timeEnum50="12:15",
   timeEnum51="12:30",
   timeEnum52="12:45",
   timeEnum53="13:00",
   timeEnum54="13:15",
   timeEnum55="13:30",
   timeEnum56="13:45",
   timeEnum57="14:00",
   timeEnum58="14:15",
   timeEnum59="14:30",
   timeEnum60="14:45",
   timeEnum61="15:00",
   timeEnum62="15:15",
   timeEnum63="15:30",
   timeEnum64="15:45",
   timeEnum65="16:00",
   timeEnum66="16:15",
   timeEnum67="16:30",
   timeEnum68="16:45",
   timeEnum69="17:00",
   timeEnum70="17:15",
   timeEnum71="17:30",
   timeEnum72="17:45",
   timeEnum73="18:00",
   timeEnum74="18:15",
   timeEnum75="18:30",
   timeEnum76="18:45",
   timeEnum77="19:00",
   timeEnum78="19:15",
   timeEnum79="19:30",
   timeEnum80="19:45",
   timeEnum81="20:00",
   timeEnum82="20:15",
   timeEnum83="20:30",
   timeEnum84="20:45",
   timeEnum85="21:00",
   timeEnum86="21:15",
   timeEnum87="21:30",
   timeEnum88="21:45",
   timeEnum89="22:00",
   timeEnum90="22:15",
   timeEnum91="22:30",
   timeEnum92="22:45",
   timeEnum93="23:00",
   timeEnum94="23:15",
   timeEnum95="23:30",
   timeEnum96="23:45",
   timeEnum97="24:00"
}

type FormInputs = {
  routineName: string;
  frequency: FrequencyEnum;
  startTime: TimeEnum;
  endTime: TimeEnum;
  notification: string;
}

export default function CreateRoutine() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    console.log(data);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="sm">
          <h2 className={styles.title}>ルーティーン登録</h2>
          <Stack component="form" noValidate
            onSubmit={handleSubmit(onSubmit)}
            spacing={4} sx={{ mx: 'auto', mt: 6, width: '400px' }}
          >
            <Stack>
              <Stack flex="flex" flexDirection="row">
                <label className={styles.label}>ルーティーン名</label>
                <input {...register("routineName", {required: true, pattern: /^\S.*$/ })} />
              </Stack>
              {errors.routineName && <span style={{color: "red", textAlign: "center"}}>必須項目です。</span>}
            </Stack>
            <Stack>
              <Stack flex="flex" flexDirection="row">
                <label className={styles.label}>頻度</label>
                <select
                {...register("frequency", {required: true})}
                >
                  <option value="all">毎日</option>
                  <option value="sun">日曜日</option>
                  <option value="mon">月曜日</option>
                  <option value="tue">火曜日</option>
                  <option value="wed">水曜日</option>
                  <option value="thr">木曜日</option>
                  <option value="fri">金曜日</option>
                  <option value="sat">土曜日</option>
                </select>
              </Stack>
              {errors.frequency && <span style={{color: "red", textAlign: "center"}}>必須項目です。</span>}
            </Stack>
            <Stack>
              <Stack flex="flex" flexDirection="row">
                <label className={styles.label}>時間</label>
                <Stack flex="flex" flexDirection="row">
                  <select {...register("startTime", {required: true})}>
                    <option value={"00:00"}>00:00</option>
                    <option value={"00:15"}>00:15</option>
                    <option value={"00:30"}>00:30</option>
                    <option value={"00:45"}>00:45</option>
                    <option value={"01:00"}>01:00</option>
                    <option value={"01:15"}>01:15</option>
                    <option value={"01:30"}>01:30</option>
                    <option value={"01:45"}>01:45</option>
                    <option value={"02:00"}>02:00</option>
                    <option value={"02:15"}>02:15</option>
                    <option value={"02:30"}>02:30</option>
                    <option value={"02:45"}>02:45</option>
                    <option value={"03:00"}>03:00</option>
                    <option value={"03:15"}>03:15</option>
                    <option value={"03:30"}>03:30</option>
                    <option value={"03:45"}>03:45</option>
                    <option value={"04:00"}>04:00</option>
                    <option value={"04:15"}>04:15</option>
                    <option value={"04:30"}>04:30</option>
                    <option value={"04:45"}>04:45</option>
                    <option value={"05:00"}>05:00</option>
                    <option value={"05:15"}>05:15</option>
                    <option value={"05:30"}>05:30</option>
                    <option value={"05:45"}>05:45</option>
                    <option value={"06:00"}>06:00</option>
                    <option value={"06:15"}>06:15</option>
                    <option value={"06:30"}>06:30</option>
                    <option value={"06:45"}>06:45</option>
                    <option value={"07:00"}>07:00</option>
                    <option value={"07:15"}>07:15</option>
                    <option value={"07:30"}>07:30</option>
                    <option value={"07:45"}>07:45</option>
                    <option value={"08:00"}>08:00</option>
                    <option value={"08:15"}>08:15</option>
                    <option value={"08:30"}>08:30</option>
                    <option value={"08:45"}>08:45</option>
                    <option value={"09:00"}>09:00</option>
                    <option value={"09:15"}>09:15</option>
                    <option value={"09:30"}>09:30</option>
                    <option value={"09:45"}>09:45</option>
                    <option value={"10:00"}>10:00</option>
                    <option value={"10:15"}>10:15</option>
                    <option value={"10:30"}>10:30</option>
                    <option value={"10:45"}>10:45</option>
                    <option value={"11:00"}>11:00</option>
                    <option value={"11:15"}>11:15</option>
                    <option value={"11:30"}>11:30</option>
                    <option value={"11:45"}>11:45</option>
                    <option value={"12:00"}>12:00</option>
                    <option value={"12:15"}>12:15</option>
                    <option value={"12:30"}>12:30</option>
                    <option value={"12:45"}>12:45</option>
                    <option value={"13:00"}>13:00</option>
                    <option value={"13:15"}>13:15</option>
                    <option value={"13:30"}>13:30</option>
                    <option value={"13:45"}>13:45</option>
                    <option value={"14:00"}>14:00</option>
                    <option value={"14:15"}>14:15</option>
                    <option value={"14:30"}>14:30</option>
                    <option value={"14:45"}>14:45</option>
                    <option value={"15:00"}>15:00</option>
                    <option value={"15:15"}>15:15</option>
                    <option value={"15:30"}>15:30</option>
                    <option value={"15:45"}>15:45</option>
                    <option value={"16:00"}>16:00</option>
                    <option value={"16:15"}>16:15</option>
                    <option value={"16:30"}>16:30</option>
                    <option value={"16:45"}>16:45</option>
                    <option value={"17:00"}>17:00</option>
                    <option value={"17:15"}>17:15</option>
                    <option value={"17:30"}>17:30</option>
                    <option value={"17:45"}>17:45</option>
                    <option value={"18:00"}>18:00</option>
                    <option value={"18:15"}>18:15</option>
                    <option value={"18:30"}>18:30</option>
                    <option value={"18:45"}>18:45</option>
                    <option value={"19:00"}>19:00</option>
                    <option value={"19:15"}>19:15</option>
                    <option value={"19:30"}>19:30</option>
                    <option value={"19:45"}>19:45</option>
                    <option value={"20:00"}>20:00</option>
                    <option value={"20:15"}>20:15</option>
                    <option value={"20:30"}>20:30</option>
                    <option value={"20:45"}>20:45</option>
                    <option value={"21:00"}>21:00</option>
                    <option value={"21:15"}>21:15</option>
                    <option value={"21:30"}>21:30</option>
                    <option value={"21:45"}>21:45</option>
                    <option value={"22:00"}>22:00</option>
                    <option value={"22:15"}>22:15</option>
                    <option value={"22:30"}>22:30</option>
                    <option value={"22:45"}>22:45</option>
                    <option value={"23:00"}>23:00</option>
                    <option value={"23:15"}>23:15</option>
                    <option value={"23:30"}>23:30</option>
                    <option value={"23:45"}>23:45</option>
                    <option value={"24:00"}>24:00</option>
                  </select>
                  <span>〜</span>
                  <select {...register("endTime", {required: true})}>
                    <option value={"00:00"}>00:00</option>
                    <option value={"00:15"}>00:15</option>
                    <option value={"00:30"}>00:30</option>
                    <option value={"00:45"}>00:45</option>
                    <option value={"01:00"}>01:00</option>
                    <option value={"01:15"}>01:15</option>
                    <option value={"01:30"}>01:30</option>
                    <option value={"01:45"}>01:45</option>
                    <option value={"02:00"}>02:00</option>
                    <option value={"02:15"}>02:15</option>
                    <option value={"02:30"}>02:30</option>
                    <option value={"02:45"}>02:45</option>
                    <option value={"03:00"}>03:00</option>
                    <option value={"03:15"}>03:15</option>
                    <option value={"03:30"}>03:30</option>
                    <option value={"03:45"}>03:45</option>
                    <option value={"04:00"}>04:00</option>
                    <option value={"04:15"}>04:15</option>
                    <option value={"04:30"}>04:30</option>
                    <option value={"04:45"}>04:45</option>
                    <option value={"05:00"}>05:00</option>
                    <option value={"05:15"}>05:15</option>
                    <option value={"05:30"}>05:30</option>
                    <option value={"05:45"}>05:45</option>
                    <option value={"06:00"}>06:00</option>
                    <option value={"06:15"}>06:15</option>
                    <option value={"06:30"}>06:30</option>
                    <option value={"06:45"}>06:45</option>
                    <option value={"07:00"}>07:00</option>
                    <option value={"07:15"}>07:15</option>
                    <option value={"07:30"}>07:30</option>
                    <option value={"07:45"}>07:45</option>
                    <option value={"08:00"}>08:00</option>
                    <option value={"08:15"}>08:15</option>
                    <option value={"08:30"}>08:30</option>
                    <option value={"08:45"}>08:45</option>
                    <option value={"09:00"}>09:00</option>
                    <option value={"09:15"}>09:15</option>
                    <option value={"09:30"}>09:30</option>
                    <option value={"09:45"}>09:45</option>
                    <option value={"10:00"}>10:00</option>
                    <option value={"10:15"}>10:15</option>
                    <option value={"10:30"}>10:30</option>
                    <option value={"10:45"}>10:45</option>
                    <option value={"11:00"}>11:00</option>
                    <option value={"11:15"}>11:15</option>
                    <option value={"11:30"}>11:30</option>
                    <option value={"11:45"}>11:45</option>
                    <option value={"12:00"}>12:00</option>
                    <option value={"12:15"}>12:15</option>
                    <option value={"12:30"}>12:30</option>
                    <option value={"12:45"}>12:45</option>
                    <option value={"13:00"}>13:00</option>
                    <option value={"13:15"}>13:15</option>
                    <option value={"13:30"}>13:30</option>
                    <option value={"13:45"}>13:45</option>
                    <option value={"14:00"}>14:00</option>
                    <option value={"14:15"}>14:15</option>
                    <option value={"14:30"}>14:30</option>
                    <option value={"14:45"}>14:45</option>
                    <option value={"15:00"}>15:00</option>
                    <option value={"15:15"}>15:15</option>
                    <option value={"15:30"}>15:30</option>
                    <option value={"15:45"}>15:45</option>
                    <option value={"16:00"}>16:00</option>
                    <option value={"16:15"}>16:15</option>
                    <option value={"16:30"}>16:30</option>
                    <option value={"16:45"}>16:45</option>
                    <option value={"17:00"}>17:00</option>
                    <option value={"17:15"}>17:15</option>
                    <option value={"17:30"}>17:30</option>
                    <option value={"17:45"}>17:45</option>
                    <option value={"18:00"}>18:00</option>
                    <option value={"18:15"}>18:15</option>
                    <option value={"18:30"}>18:30</option>
                    <option value={"18:45"}>18:45</option>
                    <option value={"19:00"}>19:00</option>
                    <option value={"19:15"}>19:15</option>
                    <option value={"19:30"}>19:30</option>
                    <option value={"19:45"}>19:45</option>
                    <option value={"20:00"}>20:00</option>
                    <option value={"20:15"}>20:15</option>
                    <option value={"20:30"}>20:30</option>
                    <option value={"20:45"}>20:45</option>
                    <option value={"21:00"}>21:00</option>
                    <option value={"21:15"}>21:15</option>
                    <option value={"21:30"}>21:30</option>
                    <option value={"21:45"}>21:45</option>
                    <option value={"22:00"}>22:00</option>
                    <option value={"22:15"}>22:15</option>
                    <option value={"22:30"}>22:30</option>
                    <option value={"22:45"}>22:45</option>
                    <option value={"23:00"}>23:00</option>
                    <option value={"23:15"}>23:15</option>
                    <option value={"23:30"}>23:30</option>
                    <option value={"23:45"}>23:45</option>
                    <option value={"24:00"}>24:00</option>
                  </select>
                </Stack>
              </Stack>
              {errors.startTime && errors.endTime && <span style={{color: "red", textAlign: "center"}}>必須項目です。</span>}
            </Stack>
            <Stack>
              <Stack flex="flex" flexDirection="row">
                <label className={styles.label}>通知内容</label>
                <textarea
                  cols={30}
                  rows={5}
                  {...register("notification", {required: true, pattern: /^\S.*$/ })}
                ></textarea>
              </Stack>
              {errors.notification && <span style={{color: "red", textAlign: "center"}}>必須項目です。</span>}
            </Stack>
            <Grid container justifyContent="center" sx={{mt: 4}}>
              <Grid item xs={5} sx={{mx: 1}}>
                <Link href="/routine" passHref>
                  <Button variant="contained" type="button" fullWidth>
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
