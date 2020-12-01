import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    Link,
    BrowserRouter,
    useParams
} from "react-router-dom";

import { AppBar, Typography } from '@material-ui/core';

const NoRoute = (props) => {
    return (<Typography variant="h1">Hello World!</Typography>);
};

const Article = (props) => {
    const { articleId } = useParams();
    return (<Typography variant="h2">Requested article {articleId}</Typography>);
};

const App = (props) => {
    return (
    <>
        <AppBar>{/* do an app bar */}</AppBar>
        {/* do a nav bar on the left hand side - in a side menu bar */}
        {/* Main body is the router switch */}
        <Switch>
            <Route path="/article/:articleId">
                <Article />
            </Route>
            <Route>
                <NoRoute />
            </Route>
        </Switch>
    </>);
};

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#root"));