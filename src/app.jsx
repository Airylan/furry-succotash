import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    Link,
    BrowserRouter} from "react-router-dom";

import { Typography, CssBaseline, Paper, Divider } from '@material-ui/core';
import { NavBar } from './NavBar';
import { Article } from './Article';
import { TitleBar } from './TitleBar';
import { useStyles } from './styles';
import { useCampaign } from './campaignStore';

const NoRoute = (props) => {
    return (<Typography paragraph>Content not found.</Typography>);
};

function CampaignDetails() {
    const [campaign] = useCampaign();

    return (<Paper elevation="2">
        <Typography variant="h1">{campaign.title}</Typography>
        <Divider />
        <Typography variant="h2">Description:</Typography>
        <Typography>{campaign.description}</Typography>
        <Divider />
        <Typography variant="h3" display="inline">Campaign owned by: </Typography><Typography variant="subtitle1" display="inline">{campaign.gm.name}</Typography>
    </Paper>);
}

const App = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
    const [campaign] = useCampaign();

    useEffect(() => {
        document.title = campaign.title;
    }, [campaign.title]);

    return (<div className={classes.root}>
        <CssBaseline />
        <TitleBar drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
        <NavBar drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
        {/* Main body is the router switch */}
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: drawerIsOpen,
            })}
        >
            <div className={classes.offset} />
            <Switch>
                <Route path="/" exact>
                    <CampaignDetails />
                </Route>
                <Route path="/article/:articleId">
                    <Article />
                </Route>
                <Route>
                    <NoRoute />
                </Route>
            </Switch>
        </main>
    </div>);
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#root"));