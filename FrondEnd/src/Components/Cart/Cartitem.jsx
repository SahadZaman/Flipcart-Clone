
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/system'
import { addEllipsis } from '../../Utils/Common-Utils'
import ButtonGroup from './ButtonGroup';

const Component = styled(Box)({
  borderTop: "1px solid #f0f0f0",
  display: "flex",
  background:"#fff",
})
const LeftComponent = styled(Box)({
  margin: "20px",
  display:"flex",
  flexDirection:"column",
})
const SmallText = styled(Typography)({
  color: "#878787",
  fontSize: "14px",
  marginTop: "10px",
})
const Remove = styled(Button)({
  marginTop:"20px",
  fontSize:"16px",
  color:"#000",
  fontWeight: "600",
})
const Cartitem = ({ item }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <>
      <Component>
        <LeftComponent>
          <img src={item.url} alt="product" style={{height:110, width:110}} />
          <ButtonGroup />
        </LeftComponent>
        <Box style={{ margin:"20px" }}>
          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <SmallText> Seller:RetailNet
            <Box component='span'><img src={fassured} alt="flipcart" style={{ width: "50px", marginLeft: "10px" }} /></Box>
          </SmallText>
          <Typography style={{margin:"20px 0"}}>
            <Box component='span' style={{ fontWeight:"600", fontSize:"18" }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component='span' style={{ color: "#388E3C" }}>{item.price.discount}off</Box>
          </Typography>
          <Remove>Remove</Remove>
        </Box>
      </Component>
    </>
  )
}

export default Cartitem