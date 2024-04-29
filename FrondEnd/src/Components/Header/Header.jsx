import { React, useState } from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, Button } from "@mui/material";
import { styled } from '@mui/system';
// component
import Search from './Search';
import CustumButton from './CustumButton';
//Link cheyyan vendi 
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const StyledHeader = styled(AppBar)(({
  background: '#2874f0',
  height: "55px",
}));
const Component = styled(Link)(({
  marginLeft: "12%",
  lineHeight: "0",
  textDecoration: "none",
  color: "inherit",
}));
const Subheading = styled(Typography)(({
  fontSize: "10px",
  fontStyle: "italic",
}));
const PluseImg = styled('img')(({
  width: 10,
  height: "10px",
  marginLeft: 4,
}));
const CustomButtonWrapper = styled(Box)(({ theme }) => (({
  margin: "0 auto 0 5%",
  [theme.breakpoints.down('md')]: {
    display: "none",
  }
})));
const MenuButton = styled(IconButton)(({ theme }) => (({
  display: "none",
  [theme.breakpoints.down('md')]: {
    display: "block",
  }
})));

const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  // list of items ne store cheythu..
  const list = () => (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustumButton />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to='/'>
          <img src={logoURL} alt='logo' style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>Explore&nbsp;<Box component="span" style={{ color: "#FFE500" }}>Plus</Box></Subheading>
            <PluseImg src={subURL} alt='sub-logo' />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustumButton />
        </CustomButtonWrapper>

      </Toolbar>
    </StyledHeader>
  )
}

export default Header;