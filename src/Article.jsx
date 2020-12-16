import React, { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Paper } from '@material-ui/core';
import { useArticle } from './articleStore';
import { useTags } from './tagStore';
import { ArticleDisplay } from './ArticleDisplay';

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

    return (<Paper elevation={2}>
        <ArticleDisplay article={article} campaignId={campaignId} tags={tagStore.tags} />
        <Link to={`/campaign/${campaignId}/article/${articleId}/edit`}>Edit</Link>
    </Paper>);
}
