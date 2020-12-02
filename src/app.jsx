import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter} from "react-router-dom";

import { Typography, CssBaseline } from '@material-ui/core';
import { NavBar } from './NavBar';
import { Article } from './Article';
import { TitleBar } from './TitleBar';
import { useStyles } from './styles';
import { useCampaign } from './campaignStore';
import { CampaignDetails } from './CampaignDetails';

const NoRoute = () => {
    return (<Typography paragraph>Content not found.</Typography>);
};
const NotImplemented = () => {
    return (<Typography paragraph>Content not implemented.</Typography>);
};

const ArticleList = NotImplemented;
const CampaignTags = NotImplemented;

const App = () => {
    const classes = useStyles();
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
                <Route path="/campaign/:campaignId/articles">
                    <ArticleList />
                </Route>
                <Route path="/campaign/:campaignId/article/:articleId">
                    <Article />
                </Route>
                <Route path="/campaign/:campaignId/tags">
                    <CampaignTags />
                </Route>
                <Route path="/campaign/:campaignId">
                    <CampaignDetails />
                </Route>
                <Route path="/" exact>
                    {/* TODO: Login page, show campaigns list, etc */}
                    <Redirect to={`/campaign/${campaign.id}`} />
                </Route>
                <Route>
                    <NoRoute />
                </Route>
            </Switch>
        </main>
    </div>);
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#root"));