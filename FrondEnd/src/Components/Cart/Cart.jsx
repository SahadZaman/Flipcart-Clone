
import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system'

// ithinakathek value varan an use selector upayokikkunnath.
import { useSelector } from 'react-redux';
//component
import Cartitem from './Cartitem';
import TotalView from './TotalView';

// styling.. 
const Containe = styled(Grid)({
  padding:"30px 135px",
})
const Header = styled(Box)({
  padding:"15px 24px",
  background:"#fff"
})
const Buttonwrapper = styled(Box)({
  padding:"16px 22px",
  background:"#fff",
  boxShadow:"0 -2px 10px 0 rgb(0 0 0 / 10%)",
  borderTop:"1px solid #f0f0f0",
})
const Buttonstyle = styled(Button)({
  display:"flex",
  marginLeft:"auto",
  background:"#fb641b",
  color:"#fff",
  width:"250px",
  height:"51px",
  borderRadius:"2px",
})
const Cart = () => {
  //cart items te akathan ella values.
  const {cartItems} = useSelector(state => state.cart);
  return (
    <>
    {
      cartItems.length ?
      <Containe container>
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography>My Cart({cartItems.length})</Typography>
          </Header>
          {
            cartItems.map(item => (
              <Cartitem item={item} />
            ))
          }
          <Buttonwrapper>
            <Buttonstyle>Place order</Buttonstyle>
          </Buttonwrapper>
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={cartItems} />
        </Grid>
      </Containe>
      :<div>Empty</div>
    }
    </>
  )
}

export default Cart