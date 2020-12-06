﻿import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Divider, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useCampaign } from './campaignStore';
import { Markdown } from './Markdown';
import { TagCloud } from 'react-tagcloud';

export const Article = (props) => {
    const { campaignId, articleId } = useParams();
    const [, { fetchArticle, switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

    const markTags = (md) => {
        return md;
    };

    const article = fetchArticle(articleId);

    return (<Paper elevation="2">
        <Typography variant="h1" display="inline">{article?.title}</Typography>
        <Typography variant="subtitle1" display="inline"> Posted on: {article?.created?.ooc}</Typography>
        <Markdown>
            {markTags(article?.content)}
        </Markdown>
        <Divider />
        {article?.playerInfo?.revealed
            ? <><Markdown>{markTags(article?.playerInfo?.content)}</Markdown><Divider/></>
            : null
        }
        <TagCloud
            minSize="8"
            maxSize="8"
            tags={article?.tags?.map((tag) => { return { value: tag, count: 1 } })}
        />
    </Paper>);
}
