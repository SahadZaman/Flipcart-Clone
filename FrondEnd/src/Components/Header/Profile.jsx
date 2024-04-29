
import React from 'react'
import { useState } from 'react'
import { Box, Typography, Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/system';

// Mui icons
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

// Mui styling
const Component = styled(Menu)({
    marginTop: "5px",
})
const Log = styled(Typography)({
    fontSize:"14px",
    marginLeft:"20px",
})

// React Hooks and on changes
const Profile = ({ account , setAccount}) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const LogoutUser = () => {
        setAccount('');
    }
    return (
        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: "2", cursor:"pointer"}}>{account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose(); LogoutUser(); }}>
                        <PowerSettingsNewIcon color='primary' fontSize='small' />
                        <Log>Logout</Log>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile