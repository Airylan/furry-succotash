import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Paper, Grid, Typography, TextField, Button } from '@material-ui/core';
import { useTags } from './tagStore';
import SaveIcon from '@material-ui/icons/Save';

import { DataStore } from '@aws-amplify/datastore';
import { Article } from './models';

import { useStyles } from './styles';
import { ArticleDisplay } from './ArticleDisplay';

export const EditArticle = () => {
    const classes = useStyles();

    const { campaignId } = useParams();
    const [tagStore, { loadTags }] = useTags();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [articleId, setArticleId] = useState("");

    useEffect(async () => {
        loadTags(campaignId);
    }, [campaignId]);

    // TODO: this needs to move into the article store somehow.
    const article = {
        title,
        content,
        articleId
    };

    // TODO: this needs to save the returned article ID so that if we do updates on this page
    //       we continue using the same article
    // TODO: this needs authentication before we actually do the thing.
    const saveArticle = async (e) => {
        return;

        (articleId === "")
            ? setArticleId(await DataStore.save(
                new Article({
                    "title": article.title,
                    "content": article.content,
                    "campaignId": campaignId,
                    "tags": []
                })
            ))
            : /* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
            await DataStore.save(Article.copyOf(CURRENT_ITEM, item => {
                // Update the values on {item} variable to update DataStore entry
                    article.title,
                    article.content,
                    article.campaignId
            }));
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
                        onClick={saveArticle}
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
