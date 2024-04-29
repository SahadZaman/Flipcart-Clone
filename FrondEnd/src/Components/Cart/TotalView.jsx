
import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

const Header = styled(Box)({
  padding: "15px 24px",
  background: "#fff",
  borderBottom: "1px solid #fofofo"
})
const Heading = styled(Typography)({
  color: "#878787",
})
const Container = styled(Box)({
  padding:"15px 24px",
  background:"#fff",
  "& > p":{
    marginBottom:"20px",
    fontSize:"14px", 
  },
  "& > h6":{
    marginBottom:"20px",
  }
})
const Price = styled(Box)({
  float:"right",
})

const TotalView = ({ cartItems }) => {
  return (
    <>
      <Box>
        <Header>
          <Heading>PRICE DETAILS</Heading>
        </Header>
        <Container>
          <Typography>Price({cartItems?.length} item)
            <Price component="span"> ₹100 </Price>
          </Typography>
          <Typography>Discount
            <Price component="span">-₹100 </Price>
          </Typography>
          <Typography>Delivery Charges
            <Price component="span"> ₹100 </Price>
          </Typography>
          <Typography variant='h6'>Total Amount

            <Price component="span"> ₹100 </Price>
          </Typography>
          
          <Typography> You will save ₹100 on this order </Typography>
        </Container>
      </Box>
    </>
  )
}

export default TotalView