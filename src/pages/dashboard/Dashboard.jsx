import { Box, Typography } from '@mui/material'
import React from 'react'
import RecipeCard from '../../components/RecipeCard'
import { recipeData } from '../../data/recipeData'

const Dashboard = () => {
    return (
        <Box display='flex' flexDirection='column' p='2rem'>
            <Box display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
            >
                <Box
                    borderBottom='1px solid blue'
                    width='17rem'
                >
                    <Typography
                        fontSize='1.8rem'
                        fontWeight='300'
                        textAlign='center'
                    >
                        Available Recipes
                    </Typography>
                </Box>

            </Box>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-around'
                alignItems='center'
                flexWrap='wrap'
                mt='2rem'
            >
                {
                    recipeData.length != 0 ? recipeData.map((recipe, index) => {
                        return <RecipeCard key={index} RecipeDetails={recipe} />
                    }) :
                        <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            width='100%'
                        >
                            <Box
                                component='img'
                                alt='Workday-Logo'
                                height='25rem'
                                src='https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png'
                            >

                            </Box>
                            <Typography
                                margin='2rem 0'
                                lineHeight='1.5'
                                fontWeight='700'
                                fontSize='1.8rem'
                            >
                                No Recipe available at the moment
                            </Typography>
                        </Box>
                }

            </Box>
        </Box>
    )
}

export default Dashboard