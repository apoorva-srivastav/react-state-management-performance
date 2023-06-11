
import { AppBar, Button, Toolbar, Typography, useTheme } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { ColorButton, ColorIcon } from '../Common';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import React from 'react';

export const Header = React.memo(() => {
  console.log("Header.render");

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ColorIcon><HistoryEduIcon fontSize='large'/></ColorIcon> My Blog App
          </NavLink>
        </Typography>
        <ColorButton color="inherit" variant="outlined" component={NavLink} to="/new">
          Create New Blog
        </ColorButton>
      </Toolbar>
    </AppBar>
  )
})

export const Footer = React.memo(() => {
  console.log("Footer.render");

  const theme = useTheme();
  return(<AppBar position="fixed" sx={{background: theme.palette.primary.main,top: 'auto', bottom: '0', height: '30px'}}></AppBar>)
})
