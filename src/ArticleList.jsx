﻿import { Typography, List, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCampaign } from "./campaignStore";
import { ListItemLink } from "./ListItemLink";


export const ArticleList = (props) => {
    const { campaignId } = useParams();
    const [campaign] = useCampaign(campaignId);

    const ArticleList = () => <List>
        {campaign.articles.map((article) => {
            return (<ListItemLink
                to={`/campaign/${campaign.id}/article/${article.id}`}
                primary={article.title}
                key={article.title}
            />);
        })}
    </List>;
    return (<>{
        props.noHeader
            ? <ArticleList />
            : <Paper elevation={2}>
                <Typography variant="h1">Articles</Typography>
                <ArticleList />
            </Paper>
    }</>);
}
