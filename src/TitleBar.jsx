import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './app';

export const TitleBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { drawerIsOpen, setDrawerIsOpen, ...rest } = props;
    const location = useLocation();

    const handleDrawerOpen = () => {
        setDrawerIsOpen(true);
    };

    return (<React.Fragment>
        <AppBar position="absolute" className={clsx(classes.appBar, {
            [classes.appBarShift]: drawerIsOpen,
        })}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, drawerIsOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {location.pathname}
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>);
}
