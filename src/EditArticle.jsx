import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import { useTags } from './tagStore';
import SaveIcon from '@material-ui/icons/Save';

import { DataStore } from '@aws-amplify/datastore';
import { Article } from './models';

import { useStyles } from './styles';
import { ArticleDisplay } from './ArticleDisplay';
import { useArticle } from './articleStore';

export const EditArticle = () => {
    const classes = useStyles();

    const { campaignId, articleId } = useParams();
    const [tagStore, { loadTags }] = useTags();

    const [baseArticle, { loadArticle, saveArticle }] = useArticle(articleId);

    const [title, setTitle] = useState(baseArticle?.title??"");
    const [content, setContent] = useState(baseArticle?.content??"");
    const [id, setArticleId] = useState(articleId??"");

    useEffect(async () => {
        await loadArticle(articleId);
        setTitle(baseArticle?.title??"");
        setContent(baseArticle?.content??"");
    }, [articleId]);

    useEffect(async () => {
        await loadTags(campaignId);
    }, [campaignId]);

    // TODO: this needs to move into the article store somehow.
    const article = {
        title,
        content,
        articleId: id
    };

    // TODO: this needs authentication before we actually do the thing.
    const saveArticleToDataStore = async (e) => {
        // setArticleId(await saveArticle(article));
    };

    return (<Paper elevation={2}>
        <Grid container spacing={1}>
            <Grid item xs>
                <Paper elevation={1}>
                    <Typography variant="h1">Create Article</Typography>
                    <TextField label="Title" value={title} onChange={e => setTitle(e.target.value)} fullWidth />
                    <TextField label="Content" value={content} onChange={e => setContent(e.target.value)} fullWidth multiline rows={4} rowsMax={22} />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                        onClick={saveArticleToDataStore}
                    >
                        Save
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs>
                <Paper elevation={1}>
                    <ArticleDisplay campaignId={campaignId} tags={tagStore.tags} article={article} />
                </Paper>
            </Grid>
        </Grid>
    </Paper>);
}
