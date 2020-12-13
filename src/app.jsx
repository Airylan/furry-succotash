import React, { useEffect } from 'react';
import 'babel-polyfill';
import clsx from 'clsx';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter, useParams } from "react-router-dom";

import {
    Typography, CssBaseline, Paper, List, ListItem
} from '@material-ui/core';
import { ListItemLink } from './ListItemLink';
import { NavBar } from './NavBar';
import { Article } from './Article';
import { TitleBar } from './TitleBar';
import { useStyles } from './styles';
import { useCampaign, useCampaigns } from './campaignStore';
import { CampaignDetails } from './CampaignDetails';
import { ArticleList } from './ArticleList';
import { Tag } from './Tag';
import { TagList } from './Taglist';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const NoRoute = () => {
    return (<Typography paragraph>Content not found.</Typography>);
};
const NotImplemented = () => {
    return (<Typography paragraph>Content not implemented.</Typography>);
};

const EditArticle = NotImplemented;

const CampaignList = () => {
    const [campaignStore, { loadCampaigns }] = useCampaigns();

    useEffect(() => { loadCampaigns() }, []);

    return (<Paper elevation={2}>
        <Typography variant="h2">Campaigns</Typography>
        {campaignStore.campaigns.map(
            campaign => {
                return (<ListItemLink
                    to={`/campaign/${campaign.id}`}
                    primary={campaign.title}
                    key={campaign.id}
                />);
            }
        )}
    </Paper>);
};

const MainWindow = (props) => {
    const classes = useStyles();
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);
    const { campaignId } = useParams();
    const [campaign] = useCampaign(campaignId);

    useEffect(() => {
        document.title = campaign?.title;
    }, [campaign?.title]);

    return (<div className={classes.root}>
        <CssBaseline />
        <TitleBar drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} />
        <NavBar drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} campaignId={campaignId} />
        {/* Main body is the router switch */}
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: drawerIsOpen,
            })}
        >
            <div className={classes.offset} />
            <React.Fragment {...props} />
        </main>
    </div>);
};

const App = () => {
    return (<Switch>
        <Route path="/campaigns">
            <MainWindow><CampaignList /></MainWindow>
        </Route>
        <Route path="/campaign/:campaignId/articles">
            <MainWindow><ArticleList /></MainWindow>
        </Route>
        <Route path="/campaign/:campaignId/article/create">
            <MainWindow><EditArticle /></MainWindow>
        </Route>
        <Route path="/campaign/:campaignId/article/:articleId">
            <MainWindow><Article /></MainWindow>
        </Route>
        <Route path="/campaign/:campaignId/tag/:tagId">
            <MainWindow><Tag /></MainWindow>
        </Route>
        <Route path="/campaign/:campaignId/tags">
            <MainWindow><TagList /></MainWindow>
        </Route>
        <Route path="/campaign/:campaignId">
            <MainWindow><CampaignDetails /></MainWindow>
        </Route>
        <Route path="/" exact>
            <Redirect to="/campaigns" />
        </Route>
        <Route>
            <MainWindow><NoRoute /></MainWindow>
        </Route>
    </Switch>);
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#root"));