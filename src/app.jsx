import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    Link,
    BrowserRouter} from "react-router-dom";

import { Typography, CssBaseline } from '@material-ui/core';
import { NavBar } from './NavBar';
import { Article } from './Article';
import { TitleBar } from './TitleBar';

const NoRoute = (props) => {
    return (<Typography paragraph>Content not found.</Typography>);
};

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    offset: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const App = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

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