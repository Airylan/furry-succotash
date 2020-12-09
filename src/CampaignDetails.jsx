import React, { useEffect } from 'react';
import { Typography, Paper, Divider, Accordion, AccordionSummary, AccordionDetails, List } from '@material-ui/core';
import { useCampaign } from './campaignStore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useParams } from 'react-router-dom';
import { ArticleList } from './ArticleList';
import { TagList } from './Taglist';

export const CampaignDetails = () => {
    const { campaignId } = useParams();
    const [campaign, { switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

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
                <TagList noHeader />
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
                <ArticleList noHeader />
            </AccordionDetails>
        </Accordion>
    </Paper>);
}
