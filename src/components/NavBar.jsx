import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    /* Adicionei o position "fixed" para que o NavBar ficasse presente durante o scroll de toda a página. */
    /* E foi necessário o marginBottom de 5em, 50px, para que a NavBar não ficasse sobreposto aos cards. */
    <Box sx={{ flexGrow: 1, marginBottom: "5em" }}>
      <AppBar position="fixed" sx={{bgcolor: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            <Box component="img" src="/assets/netflix_logo_1.png" height="2em"/>
          </Typography>
          <Button color="inherit" sx={{fontWeight: 'bold'}}>Início</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
