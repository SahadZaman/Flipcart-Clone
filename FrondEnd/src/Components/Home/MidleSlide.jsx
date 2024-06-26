import React from 'react'
import Slide from './Slide'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

// css actions

const Component = styled(Box)({
    display:"flex",
})
const LeftComponent = styled(Box)(({theme})=>({
    width:"83%",
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }

}));
const RightComponent = styled(Box)(({theme})=>({
    background:"#FFFFFF",
    padding:"5px",
    marginTop:"10px",
    marginLeft:"5px",
    width:"17%",
    textAlign:"center",
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}));


const MidleSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        
        <Component>
            <LeftComponent>
                <Slide products={products}
                    title={title}
                    timer={timer}
                />
            </LeftComponent>
            <RightComponent>
                <img src={adURL} alt="urlimg" style={{width:200,height:"100%",}}/>
            </RightComponent>
        </Component>
    )
}

export default MidleSlide