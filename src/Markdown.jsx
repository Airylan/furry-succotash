// From the Material-UI Blog demo: https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/blog/Markdown.js

import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = (theme) => ({
  listItem: {
    marginTop: theme.spacing(1),
  },
});

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h5',
      },
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: { component: Typography, props: { gutterBottom: true, variant: 'subtitle1' } },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true },
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: Link },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

const markTags = (toLink, tags, text) => {
    return tags?.reduce(
        (previous, next) =>
            previous.replace(new RegExp(`(${next}\\S*)`, 'ig'),
                `[$1](${toLink?.(next)??next})`),
        text
    ) ?? text;
};

export const Markdown = (props) => {
    const { children, tags, toLink, ...otherProps } = props;

    return <ReactMarkdown options={options} {...otherProps}>{markTags(toLink, tags, children) }</ReactMarkdown>;
}