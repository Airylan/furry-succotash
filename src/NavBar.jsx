import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { IconButton, Drawer } from '@material-ui/core';
import { Divider, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useStyles } from './styles';
import { ListItemLink } from './ListItemLink';
import { useCampaign } from './campaignStore';

export const NavBar = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const { drawerIsOpen, setDrawerIsOpen, campaignId, ...rest } = props;
    const [campaign] = useCampaign(campaignId);

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
            <ListItemLink to={`/campaigns`} primary="Campaign List" />
            <Divider />
            {campaign
            ?<>
                <ListItemLink to={`/campaign/${campaign.id}`} primary="Campaign Details" />
                <ListItemLink to={`/campaign/${campaign.id}/tags`} primary="Tag Cloud" />
                <ListItemLink to={`/campaign/${campaign.id}/articles`} primary="Article List" />
                <Divider />
                <ListItemLink to={`/campaign/${campaign.id}/article/create`} primary="Create Article" />
            </>
            : null}
        </List>
    </Drawer>);
}
