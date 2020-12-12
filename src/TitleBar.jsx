import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { useLocation, useParams } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';
import { useCampaign } from './campaignStore';

export const TitleBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { drawerIsOpen, setDrawerIsOpen, ...rest } = props;
    const location = useLocation();
    const { campaignId } = useParams();
    const [campaign] = useCampaign(campaignId);

    const handleDrawerOpen = () => {
        setDrawerIsOpen(true);
    };

    return (<React.Fragment>
        <AppBar position="fixed">
            <Toolbar className={clsx(classes.appBar, {
                [classes.appBarShift]: drawerIsOpen,
            })}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, drawerIsOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap display="inline">
                    {campaign?.title} {/* TODO: title here related to location (i.e. tag, article, etc) */}
                </Typography>
                <Typography variant="subtitle1">
                    {location.pathname}
                </Typography>
            </Toolbar>
        </AppBar>
    </React.Fragment>);
}
