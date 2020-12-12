import React from 'react';
import { Typography, Chip, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useCampaign } from './campaignStore';

export const TagList = (props) => {
    const { campaignId } = useParams();
    const [campaign, { }] = useCampaign(campaignId);
    const tagChips = campaign.tags.map(tag =>
        <Chip
            key={tag}
            label={tag}
            component="a"
            href={`/campaign/${campaignId}/tag/${tag}`}
            clickable
        />
    );
    return (<>{props?.noHeader === true
        ? <>{tagChips}</>
        : <Paper elevation={2}><Typography variant="h1">Tags</Typography>{tagChips}</Paper>}</>);
};
