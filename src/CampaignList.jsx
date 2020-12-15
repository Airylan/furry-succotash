import React, { useEffect } from 'react';
import { Typography, Paper } from '@material-ui/core';
import { ListItemLink } from './ListItemLink';
import { useCampaigns } from './campaignStore';

export const CampaignList = () => {
    const [campaignStore, { loadCampaigns }] = useCampaigns();

    useEffect(() => { loadCampaigns(); }, []);

    return (<Paper elevation={2}>
        <Typography variant="h2">Campaigns</Typography>
        {campaignStore.campaigns.map(
            campaign => {
                return (<ListItemLink
                    to={`/campaign/${campaign.id}`}
                    primary={campaign.title}
                    key={campaign.id} />);
            }
        )}
    </Paper>);
}
