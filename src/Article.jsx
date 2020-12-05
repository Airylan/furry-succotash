import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Divider, Typography, Paper } from '@material-ui/core';
import { useCampaign } from './campaignStore';
import { Markdown } from './Markdown';
import { TagCloud } from 'react-tagcloud';

export const Article = (props) => {
    const { campaignId, articleId } = useParams();
    const [, { fetchArticle, switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

    const article = fetchArticle(articleId);
    const handleTagClick = (e) => {
        // no-op for now.
    };

    return (<Paper elevation="2">
        <Typography variant="h1" display="inline">{article?.title}</Typography>
        <Typography variant="subtitle1"> Posted on: {article?.created?.ooc}</Typography>
        <Markdown>
            {article?.content}
        </Markdown>
        <Divider />
        {article?.playerInfo?.revealed
            ? <><Markdown>{article?.playerInfo?.content}</Markdown><Divider/></>
            : null
        }
        <TagCloud
            minSize="12"
            maxSize="12"
            tags={article?.tags?.map((tag) => { return { value: tag, count: 1 } })}
            onClick={handleTagClick}
        />
    </Paper>);
}
