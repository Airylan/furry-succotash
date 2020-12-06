import React, { useEffect } from 'react';
import { Typography, Paper, Divider, Accordion, AccordionSummary, AccordionDetails, List, Chip } from '@material-ui/core';
import { useCampaign } from './campaignStore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TagCloud } from 'react-tagcloud';
import { ListItemLink } from './ListItemLink';
import { useParams } from 'react-router-dom';
import { ArticleList } from './ArticleList';

export const CampaignDetails = () => {
    const { campaignId } = useParams();
    const [campaign, { switchCampaign }] = useCampaign();

    useEffect(() => {
        switchCampaign(campaignId);
    }, [campaignId]);

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
                {/*<TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={campaign.tags.map((tag) => { return { value: tag, count: 1 } })}
                    onClick={handleTagClicked}
                />*/}
                {campaign.tags.map(tag =>
                    <Chip
                        key={tag}
                        label={tag}
                        component="a"
                        href={`/campaign/${campaignId}/tag/${tag}`}
                        clickable
                    />
                )}
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
