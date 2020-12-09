import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Divider, Typography, Paper, Chip } from '@material-ui/core';
import { useCampaign } from './campaignStore';
import { Markdown } from './Markdown';

export const Article = (props) => {
    const { campaignId, articleId } = useParams();
    const [campaign, { fetchArticle, switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

    const toLink = (tag) => `/campaign/${campaign.id}/tag/${tag}`;

    const article = fetchArticle(articleId);

    return (<Paper elevation={2}>
        <Typography variant="h1" display="inline">{article?.title}</Typography>
        <Typography variant="subtitle1" display="inline"> Posted on: {article?.created?.ooc}</Typography>
        <Markdown tags={campaign.tags} toLink={toLink}>
            {article?.content}
        </Markdown>
        <Divider />
        {article?.playerInfo?.revealed
            ? <><Markdown tags={campaign.tags} toLink={toLink}>{article?.playerInfo?.content}</Markdown><Divider/></>
            : null
        }
        {article?.tags?.map((tag) =>
            <Chip
                key={tag}
                label={tag}
                component="a"
                href={`/campaign/${campaignId}/tag/${tag}`}
                clickable
            />
        )}
    </Paper>);
}
