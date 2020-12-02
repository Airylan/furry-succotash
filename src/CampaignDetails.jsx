import React from 'react';
import { Typography, Paper, Divider, Accordion, AccordionSummary, AccordionDetails, List } from '@material-ui/core';
import { useCampaign } from './campaignStore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TagCloud } from 'react-tagcloud';
import { ListItemLink } from './ListItemLink';

export const CampaignDetails = () => {
    const [campaign] = useCampaign();

    const handleTagClicked = (tag) => {
        // Do nothing for now. Routing to articles later.
    };

    return (<Paper elevation="2">
        <Typography variant="h1">{campaign.title}</Typography>
        <Divider />
        <Typography variant="h2">Description:</Typography>
        <Typography>{campaign.description}</Typography>
        <Divider />
        <Typography variant="h3" display="inline">Campaign owned by: </Typography><Typography variant="subtitle1" display="inline">{campaign.gm.name}</Typography>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="subtitle1">Tags</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={campaign.tags.map((tag) => { return { value: tag, count: 1 } })}
                    onClick={handleTagClicked}
                />
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography variant="subtitle1">Articles</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    {campaign.articles.map((article) => {
                        return (<ListItemLink
                            to={`/campaign/${campaign.id}/article/${article.id}`}
                            primary={article.title}
                        />);
                    })}
                </List>
            </AccordionDetails>
        </Accordion>
    </Paper>);
}
