import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { useLocation } from "react-router-dom";
import { IconButton, Drawer } from '@material-ui/core';
import { Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './app';

export const NavBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { drawerIsOpen, setDrawerIsOpen, ...rest } = props;
    const location = useLocation();

    const handleDrawerClose = () => {
        setDrawerIsOpen(false);
    };

    return (<Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawerIsOpen}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </div>
        <Divider />
        <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    </Drawer>);
}
