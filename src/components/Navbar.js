import { Typography,Toolbar,AppBar,IconButton } from '@material-ui/core'
import React from 'react'
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon style={{color:'#fff'}}/>
                </IconButton>
                <Typography>Live Score</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
