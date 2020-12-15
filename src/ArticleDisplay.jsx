import React from 'react';
import { Divider, Typography, Chip } from '@material-ui/core';
import { Markdown } from './Markdown';

export const ArticleDisplay = (props) => {
    const tags = props.tags;
    const article = props.article;
    const campaignId = props.campaignID;

    const toLink = (tag) => `/campaign/${campaignId}/tag/${tag.id}`;

    return (<>
        <Typography variant="h1" display="inline">{article?.title}</Typography>
        <Typography variant="subtitle1" display="inline"> Posted on: {article?.created?.ooc}</Typography>
        <Markdown tags={tags} toLink={toLink}>
            {article?.content ?? ""}
        </Markdown>
        <Divider />
        {article?.playerInfo?.revealed
            ? <><Markdown tags={tagStore.tags} toLink={toLink}>{article?.playerInfo?.content ?? ""}</Markdown><Divider /></>
            : null}
        {article?.tags?.map((tag) => <Chip
            key={tag.id}
            label={tag.label}
            component="a"
            href={`/campaign/${campaignId}/tag/${tag.id}`}
            clickable />
        )}
    </>);
}
