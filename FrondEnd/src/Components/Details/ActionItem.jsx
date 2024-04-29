import { React, useState } from 'react'
import { Box, Button } from '@mui/material'

import { styled } from '@mui/system'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../../Redux/Action/cartActions';

// styling for css.
const LeftContainer = styled(Box)(({theme})=>({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down('lg')]:{
    padding:"20px 40px",
  }
}));
const Image = styled('img')({
  padding: "15px",
  width: "90%",
})
const StyledButton = styled(Button)(({theme})=>({
  width: "48%",
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down("lg")]:{
    width:"46%",

  },
  [theme.breakpoints.down('sm')]:{
    width:"48%",
  }

}))

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  // ith enthinan enn vechal reduxnte akathn value edukan
  const dispach = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemCart = () => {
    dispach(addTocart(id, quantity))
    navigate('/cart');
  }
  return (
    <LeftContainer>
      <Box style={{
        padding: "15px 20px",
        border: "1px solid #f0f0f0",
      }}>
        <Image src={product.detailUrl} alt="images" />
      </Box>
      <StyledButton variant='contained' onClick={() => addItemCart()} style={{ marginRight: 10, background: "#ff9f00" }}><ShoppingCartIcon /> Add to Cart </StyledButton>
      <StyledButton variant='contained' style={{ background: "#fb541b" }}><FlashOnIcon /> By Now </StyledButton>
    </LeftContainer>
  )
}

export default ActionItem