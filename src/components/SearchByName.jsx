import { FormControl, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { SetRecipeName } from '../actions/searchAction';

const RecipeNameFilter = () => {
    let dispatch = useDispatch();
    const [recipeName, setRecipeName] = useState([]);

    const handleChange = (e) => {
        setRecipeName(e.target.value);
        console.log(e.target.value);
        dispatch(SetRecipeName(e.target.value));
    };

    return (
        <FormControl sx={{ width: 'auto', minWidth: '15rem' }} size='small'>
            <OutlinedInput
                aria-describedby="outlined-company-name"
                placeholder='Search recipe'
                onChange={handleChange}
                sx={{
                    fontSize: '1.3rem',
                    fontWeight: '300',
                    '&::placeholder': { // Change placeholder color
                        color: '#999',
                    },
                    "&:active": {
                        borderRadius: '0.4rem',
                        borderColor: 'rgb(180, 180, 180)',
                    },
                    borderRadius: '0.4rem'
                }}
            />
        </FormControl>
    )
}

export default RecipeNameFilter;