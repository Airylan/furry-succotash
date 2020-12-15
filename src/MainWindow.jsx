import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useParams } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { NavBar } from './NavBar';
import { TitleBar } from './TitleBar';
import { useStyles } from './styles';
import { useCampaign } from './campaignStore';

export const MainWindow = (props) => {
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

        <main
            className={clsx(classes.content, {
                [classes.contentShift]: drawerIsOpen,
            })}
        >
            <div className={classes.offset} />
            <React.Fragment {...props} />
        </main>
    </div>);
}
