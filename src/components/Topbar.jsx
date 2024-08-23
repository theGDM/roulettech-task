import React from 'react'
import { Box } from '@mui/material'
import RecipeNameFilter from './SearchByName';

const Topbar = () => {
    return (
        <Box display="flex"
            justifyContent="space-between"
            alignItems="center"
            p='0.8rem'
            height='10vh'
            sx={{
                borderRadius: '1rem',
                backgroundColor: '#fff',
                boxShadow: '0rem 0.2rem 0.4rem rgba(0, 0, 0, 0.2)'
            }}
        >
            <Box
                component='img'
                alt='Workday-Logo'
                height='5rem'
                src='https://kangacook.com/assets/kangacook_logo_en-C6XaWo8m.svg'
            />
            <RecipeNameFilter />
        </Box>
    )
}

export default Topbar;