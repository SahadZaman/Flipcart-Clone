import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import { styled } from '@mui/system'

import { useState, useContext } from 'react';
import { DataContext } from '../../Context/Dataprovider';

//Component imported
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile';

const Wrapper = styled(Box)(({theme})=>(({
    display: "flex",
    margin: "0 3% 0 auto",
    "& > button, & > p, & > div": {
        marginRight: "40px !important",
        fontSize: "16px",
        alignItems:"center",
    },
    [theme.breakpoints.down('md')]:{
      display:"block",
    }
})));
const Container = styled(Box)(({theme})=>(({
  display:"flex",
  [theme.breakpoints.down('md')]:{
    display:"block",
  }
})));
const LoginButton = styled(Button)(({
  color:"#2874f0",
  backgroundColor:"#fff",
  textTransform:"none",
  padding:"5px 40px",
  borderRadius:"2px",
  boxShadow:"none",
  fontWeight:"600",
  height:"32px",
}));



const CustumButton = () => {
  const [open, setOpen] = useState(false);
  const {account, setAccount} = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  } 
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount}/>:
        <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
      } 
        <Typography style={{marginTop:"3px", width:135}}>Become a seller</Typography>
        <Typography style={{marginTop:"3px"}}>More</Typography>
        <Container>
            <ShoppingCart/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustumButton