import React, { useEffect } from 'react';
import { Chip, Paper, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useTag } from './tagStore';

export function Tag() {
    const { campaignId, tagId } = useParams();
    const [tag, { loadTag, fetchArticlesByTag }] = useTag(tagId);

    useEffect(async () => {
        await loadTag(tagId);
        await fetchArticlesByTag(tagId);
    }, [tagId]);

    return (<Paper elevation={2}>
        <Typography variant="h1">{tag?.label}</Typography>
        {tag?.articles?.map(article =>
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
