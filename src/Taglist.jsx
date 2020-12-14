import React, { useEffect } from 'react';
import { Typography, Chip, Paper } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useTags } from './tagStore';

export const TagList = (props) => {
    const { campaignId } = useParams();
    const [tagStore, { loadTags }] = useTags();

    useEffect(async () => {
        await loadTags(campaignId);
    }, [campaignId]);

    const tagChips = tagStore?.tags?.map(tag =>
        <Chip
            key={tag.id}
            label={tag.label}
            component="a"
            href={`/campaign/${campaignId}/tag/${tag.id}`}
            clickable
        />
    );
    return (<>{props?.noHeader === true
        ? <>{tagChips}</>
        : <Paper elevation={2}><Typography variant="h1">Tags</Typography>{tagChips}</Paper>}</>);
};
