
import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { styled } from '@mui/system'


const Component = styled(ButtonGroup)({
    marginTop:"30px",

});
const StyledButton = styled(Button)({
    borderRadius:"50%",

});


const GroupButton = () => {
    return (
        <>
            <Component>
                <StyledButton>-</StyledButton>
                <Button disabled>1</Button>
                <StyledButton> + </StyledButton>
            </Component>
        </>
    )
}

export default GroupButton