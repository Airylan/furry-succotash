import React from 'react';
import { useParams } from "react-router-dom";
import { Typography } from '@material-ui/core';

export const Article = (props) => {
    const { articleId } = useParams();
    return (<Typography variant="h2">Requested article {articleId}</Typography>);
}
