import React from 'react'
import { Box, Typography, Grid } from '@mui/material'

import { styled } from '@mui/system'

// redune call cheyyan use effect vilikunnu
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductsDetails } from '../../Redux/Action/ProductActions';

import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const Component = styled(Box)({
    background: "#F2F2F2",
    marginTop: "55px",

})
const Container = styled(Grid)(({theme})=>({
    background: "#FFFFFF",
    display: "flex",
    [theme.breakpoints.down('md')]:{
        margin:0,
    }

}))
const RightContainer = styled(Grid)({
    marginTop: "50px",

})


const DetailView = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductsDetails);
    

    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductsDetails(id))
        }
    }, [dispatch, id, loading, product]);

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} sx={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={4} md={4} sm={8} sx={12}>
                        <ProductDetail product={product}  />
                    </RightContainer>
                </Container>
            }
        </Component>
    )
}

export default DetailView