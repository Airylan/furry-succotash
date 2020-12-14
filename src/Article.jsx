import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Divider, Typography, Paper, Chip } from '@material-ui/core';
import { useArticle } from './articleStore';
import { useTags } from './tagStore';
import { Markdown } from './Markdown';

export const Article = (props) => {
    const { campaignId, articleId } = useParams();
    const [article, { loadArticle }] = useArticle(articleId);
    const [tagStore, { loadTags }] = useTags();

    useEffect(async () => {
        loadArticle(articleId);
    }, [articleId]);

    useEffect(async () => {
        loadTags(campaignId);
    }, [campaignId]);

    const toLink = (tag) => `/campaign/${campaignId}/tag/${tag.id}`;

    return (<Paper elevation={2}>
        <Typography variant="h1" display="inline">{article?.title}</Typography>
        <Typography variant="subtitle1" display="inline"> Posted on: {article?.created?.ooc}</Typography>
        <Markdown tags={tagStore.tags} toLink={toLink}>
            {article?.content??""}
        </Markdown>
        <Divider />
        {article?.playerInfo?.revealed
            ? <><Markdown tags={tagStore.tags} toLink={toLink}>{article?.playerInfo?.content??""}</Markdown><Divider/></>
            : null
        }
        {article?.tags?.map((tag) =>
            <Chip
                key={tag.id}
                label={tag.label}
                component="a"
                href={`/campaign/${campaignId}/tag/${tag.id}`}
                clickable
            />
        )}
    </Paper>);
}
