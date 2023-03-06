import { GitHub, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{textAlign:"center", bgcolor:"#1A1A19",color:"white", p:3}}>
        <Box sx={{
            my:3,
            "& svg":{
                fontSize:"40px",
                cursor:"pointer",
                mr:2,
            },
            "& svg:hover":{
                color:"goldenrod",
                transform:'translateX(5px)',
                transition:'all 400ms'
            }
        }}>
            <Instagram/>
            <Twitter/>
            <GitHub/>
            <YouTube/>
        </Box>
        <Typography variant='h5' sx={{
            "@media (max-width:600px)":{
                fontSize:"1rem"
            }
        }}>
            All Rights Reserved &copy; Shahid
        </Typography>
    </Box>
  )
}

export default Footer