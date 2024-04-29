import React from 'react'
import { Box, Typography } from '@mui/material'
import { navData } from '../../Constants/Data'
import { styled } from '@mui/system'

const Component = styled(Box)(({ theme }) => ({
    display: "flex",
    margin: "55px 130px 0 130px",
    justifyContent: "space-between",
    overflow: "hidden",
    [theme.breakpoints.down('lg')]: {
        margin: 0,
    }
}));
const Container = styled(Box)({
    padding: "12px 8px",
    textAlign: "center",
})
const Text = styled(Typography)({
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "inherit",
})

const NaveBar = () => {
    return (
        <Box style={{ background:"#fff" }}>
            <Component>
                {
                    navData.map(data => (
                        <Container>
                            <img src={data.url} alt="nav" style={{ width: 64 }} />
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}

export default NaveBar