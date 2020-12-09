import React, { useEffect } from 'react';
import { Chip, Paper, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useCampaign } from "./campaignStore";

export function Tag() {
    const { campaignId, tagId } = useParams();
    const [, { switchCampaign, fetchArticlesByTag }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

    const articles = fetchArticlesByTag(tagId);

    return (<Paper elevation={2}>
        <Typography variant="h1">{tagId}</Typography>
        {articles?.map(article =>
            <Chip
                key={article.id}
                label={article.title} /* TODO this needs to be the article title. */
                component="a"
                href={`/campaign/${campaignId}/article/${article.id}`}
                clickable
            />
        )}
    </Paper>);
}
