import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

interface Props {
    type?: any
    selected?: any
}

export default function BasicSelect({ type, selected }: Props) {
    const [age, setAge] = useState<any>(selected ? selected === 'hot' ? '10' : '20' : '10');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        type(age)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Tipo"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Hot</MenuItem>
                    <MenuItem value={20}>Iced</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}