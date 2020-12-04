import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { useCampaign } from './campaignStore';
import { Markdown } from './Markdown';

export const Article = (props) => {
    const { campaignId, articleId } = useParams();
    const [, { fetchArticle, switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

    const article = fetchArticle(articleId);

    return (<>
        <Typography variant="h1">{article?.title}</Typography>
        <Markdown>
            {article?.content}
        </Markdown>
    </>);
}
