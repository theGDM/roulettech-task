import { Avatar, Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShowMoreDialog from './ShowMoreDialog';
import { recipeData } from '../data/recipeData';

const RecipeCard = ({ RecipeDetails }) => {
    //creating states for checking if the model is open or not
    const [isOpen, setOpenModal] = useState(false);
    const openInfoModal = () => setOpenModal(true);
    const closeInfoModal = () => setOpenModal(false);

    return (
        <Box
            display='flex'
            height='100%'
            flexDirection='column'
            justifyContent='space-between'
            maxWidth='36rem'
            alignItems='start'
            p='0.8rem'
            m='0.5rem 1.2rem 1.2rem 1.2rem'
            boxShadow='rgba(0, 0, 0, 0.25) 0px 1px 4px 0px !important'
            borderRadius='2rem'
        >
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='start'
                p='0.5rem 1rem'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='start'
                >
                    <Typography
                        color='#8b8b8b'
                        fontSize='1.35rem'
                        fontWeight='600'
                        letterSpacing='0.1rem'
                        marginBottom='0.3rem'
                    >
                        {RecipeDetails?.name}
                    </Typography>
                    <Typography
                        fontSize='1.4rem'
                        lineHeight='1.5'
                        fontWeight='300'
                        textTransform='capitalize'
                    >
                        {RecipeDetails?.author}
                    </Typography>
                    <Typography
                        fontSize='1.2rem'
                        fontWeight='200'
                        mt='0.5rem'
                        textTransform='capitalize'
                    >
                        {RecipeDetails?.description}
                    </Typography>

                </Box>
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0.5rem 1rem'
                height='25rem'
                maxWidth='100%'
                sx={{
                    backgroundImage: 'linear-gradient(to bottom, rgb(77, 89, 106) 0%, rgb(77, 89, 106) 65%,  transparent 100%);',
                    backgroundClip: 'text'
                }}
            >
                <Typography
                    fontWeight='400'
                    lineHeight='1.5'
                    fontSize='1.6rem'
                >
                    Ingredients:
                </Typography>
                <Typography
                    fontSize='1.4rem'
                    color='rgb(77, 89, 106)'
                    fontWeight='300'
                >
                    {RecipeDetails?.ingredients}
                </Typography>
                <Typography
                    fontWeight='400'
                    lineHeight='1.5'
                    fontSize='1.6rem'
                    mt='1rem'
                >
                    Method:
                </Typography>
                <Typography
                    fontSize='1.4rem'
                    color='transparent'
                    fontWeight='300'
                    style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {RecipeDetails?.method}
                </Typography>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='row'
                justifyContent='center'
            >
                <Typography
                    fontSize='1.4rem'
                    color='#4943da'
                    onClick={openInfoModal}
                    sx={{
                        cursor: 'pointer'
                    }}
                >
                    Show more
                </Typography>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0 1rem'
                mt='1rem'
                mb='1rem'
            >
                <Button
                    sx={{
                        backgroundColor: 'rgb(85, 239, 196)',
                        color: '#000',
                        p: '0.8rem 1.8rem',
                        borderRadius: '0.8rem',
                        fontWeight: '500',
                        fontSize: '1.5rem',
                        textTransform: 'none',
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "rgb(85, 239, 196)"
                        }
                    }}
                    target="_blank"
                    href={RecipeDetails?.url}
                >
                    ⚡ Search Recipe
                </Button>
            </Box>
            {isOpen && <ShowMoreDialog isOpen={openInfoModal} onClose={closeInfoModal} recipeDetails={RecipeDetails} />}
        </Box >
    )
}

export default RecipeCard