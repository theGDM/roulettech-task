import React from 'react';
import Modal from 'react-modal';
import { Box, Typography } from "@mui/material";

const ShowMoreDialog = ({ isOpen, onClose, recipeDetails }) => {
    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '55%',
            height: '80%',
            backgroundColor: '#fff',
            borderRadius: '1rem',
            boxShadow: '0px 0px 1rem 0px rgba(0, 0, 0, 0.8)',
            overflow: 'auto',
            padding: '1rem'
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel='Job Details Information'
            style={modalStyle}
        >
            <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                width='100%'
            >
                <Typography
                    color='#000'
                    fontSize='1.8rem'
                    lineHeight='1.6'
                    mb='1.5rem'
                >
                    Recipe Description
                </Typography>
            </Box>

            <Box
                display='flex'
                flexDirection='column'
                justifyContent='start'
                p='0.5rem 1rem'
                height='25rem'
                maxWidth='100%'
                sx={{
                    backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 60%,  #F6F6F6 100%);',
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
                    color='rgb(77, 89, 106)'
                    fontWeight='300'
                    fontSize='1.4rem'
                >
                    {recipeDetails?.ingredients}
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
                    color='rgb(77, 89, 106)'
                    fontWeight='300'
                >
                    {recipeDetails?.method}
                </Typography>
            </Box>
        </Modal >
    );
}

export default ShowMoreDialog;