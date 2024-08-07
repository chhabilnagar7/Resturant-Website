import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center',bgcolor:'black',color:'white',p:3}}>

        <Box sx={{
            my:3, // margin y means vertical
            "& svg":{
                fontSize:"60px",
                cursor:"pointer",
                mr: 2, // margin right
            },
            "& svg:hover":{
                color:'gold'
            }
        }}>
            {/* social media Icons */}
            <InstagramIcon/>
            <FacebookIcon/>
            <XIcon/>
            <GitHubIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography>
            All Rights Reserved &copy; Mobcoder
        </Typography>
      </Box>
    </>
  )
}

export default Footer
