import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DaySelectBox() {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">頻度</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="day"
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
      </FormControl>
    </Box>
  );
}