import { Typography, List, Paper } from "@material-ui/core";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCampaign } from "./campaignStore";
import { ListItemLink } from "./ListItemLink";
import { useArticles } from './articleStore';


export const ArticleList = (props) => {
    const { campaignId } = useParams();
    const [articleStore, { loadArticles }] = useArticles();

    useEffect(async () => {
        await loadArticles(campaignId);
    }, [campaignId]);

    const ArticleList = () => <List>
        {articleStore?.articles?.map((article) => {
            return (<ListItemLink
                to={`/campaign/${campaignId}/article/${article.id}`}
                primary={article.title}
                key={article.id}
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
