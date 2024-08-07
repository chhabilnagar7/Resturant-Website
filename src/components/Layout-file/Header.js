import React,{useState} from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import "./HeaderStyle.css";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  //menu drawer 
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        <Typography 
              color={"gold"}
              variant='h6'
              component="div"
              sx={{flexGrow:1, my:3 }}
              >
              
             <FastfoodIcon/>
              My Resturant
              
            <Divider/>
            </Typography>

            
              <ul className='mobile-navigation'>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
              
              
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
              
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
              
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
           

    </Box>
  )
  return (
    <>
    
      <Box>
        <AppBar component={'nav'} style={{backgroundColor:"black"}}>
          <Toolbar>
            <IconButton 
            color='inherit' 
            aria-label='open drawer' 
           
            sx={{
              mr: 2,
              display:{ sm:"none"},
              }}
              onClick={handleDrawerToggle}
              >
              <MenuIcon/>

            </IconButton>
            <Typography 
              color={"gold"}
              variant='h6'
              component="div"
              style={{flexGrow:1,}}
              >
              
             <FastfoodIcon/>
              My Resturant
              
            </Typography>

            <Box sx={{display:{xs:"none",sm: "block"}}}>
              {/* xs for mobile  devices and sm for desktops and tabltes */}
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
              
              
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
              
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
              
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>  
            
          </Toolbar>
        </AppBar>
        <Box component="nav">
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
                
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >

        </Box>
        <Toolbar/>
      </Box>
    </>
  )
}

export default Header
