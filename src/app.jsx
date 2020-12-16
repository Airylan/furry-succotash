import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { Typography } from '@material-ui/core';
import { Article } from './Article';
import { CampaignDetails } from './CampaignDetails';
import { ArticleList } from './ArticleList';
import { Tag } from './Tag';
import { TagList } from './Taglist';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { CampaignList } from './CampaignList';
import { MainWindow } from './MainWindow';
import { EditArticle } from './EditArticle';
Amplify.configure(awsconfig);

const NoRoute = () => {
    return (<Typography paragraph>Content not found.</Typography>);
};
const NotImplemented = () => {
    return (<Typography paragraph>Content not implemented.</Typography>);
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
        <Route path="/campaign/:campaignId/article/:articleId/edit">
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