import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from "@mui/material";
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import {updateTarget} from "../redux/targetSlice"

type Icountry = {
    "Country": string,
    "Slug": string,
    "ISO2": string,

}


const CountrySelect = ({ data }: { data: Icountry[] }) => {

    const country = useAppSelector((state) => state.target.value)

    const dispatch = useAppDispatch()


    const handleChange = (event: SelectChangeEvent<unknown>) => {
        dispatch(updateTarget((event.target.value as string)));
    };


    return (

        <Box >
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Country"
                    onChange={handleChange}
                >

                    {
                        data.map((data,index) => (<MenuItem key={index} value={data.Slug}>{data.Country}</MenuItem>))
                    }


                </Select>
            </FormControl>
        </Box>

    )
}

export default CountrySelect