import React from 'react'
import { Box, Grid } from '@mui/material'
import { styled } from '@mui/system'

import { imageURL } from '../../Constants/Data'

const Wraper = styled(Grid)({
    marginTop: "10px",
    justifyContent: "space-between",
})
const Image = styled('img')(({theme})=>({
    marginTop:10,
    width:"100%",
    display:"flex",
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]:{
        objectFit:"cover",
        height:120
    }
}));

const MidleSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Wraper lg={12} sm={12} md={12} xs={12} container>
                {
                    imageURL.map(image => (
                        <Grid item lg={4} sm={12} md={4} xs={12}>
                            <img src={image} alt="image" style={{ width: "100%" }} />
                        </Grid>
                    ))
                }
            </Wraper>
            <Image src={url} alt="covid-19" />
        </>
    )
}

export default MidleSection