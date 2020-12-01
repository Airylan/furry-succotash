import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    Link,
    BrowserRouter,
    useParams,
    useLocation
} from "react-router-dom";

import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NoRoute = (props) => {
    return (<Typography variant="h1">Hello World!</Typography>);
};

const Article = (props) => {
    const { articleId } = useParams();
    return (<Typography variant="h2">Requested article {articleId}</Typography>);
};

// TODO: use theme
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const App = (props) => {
    const classes = useStyles();
    const location = useLocation();

    return (<>
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography classname={classes.title} variant="h6">
                        {location.pathname}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar /> {/* this fixes the "fixed" spacing per Material UI docs. */}
        </div>
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