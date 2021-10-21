import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/tiendadexime.png';
import useStyles from './Styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.AppBar} color="inherit">
                        <img src={logo} alt="Tiendadexime.js" height="150px" className={classes.image}/>

                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart badgeContent={2} color="secondary">

                                </ShoppingCart>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar