import React, { useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useCampaign } from "./campaignStore";

export function Tag() {
    const { campaignId, tagId } = useParams();
    const [campaign, { switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

    return (<Paper elevation="2">
        <Typography variant="h1">{tagId}</Typography>
    </Paper>);
}
