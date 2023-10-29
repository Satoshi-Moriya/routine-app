import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function MultilineTextField() {
  return (
    <TextField
      id="outlined-multiline-static"
      label="通知内容"
      multiline
      rows={4}
      defaultValue=""
      placeholder="通知内容"
    />
  );
}