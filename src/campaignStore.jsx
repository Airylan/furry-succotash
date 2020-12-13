import { createStore, createHook } from 'react-sweet-state';

import { DataStore } from '@aws-amplify/datastore';
import { Campaign } from './models';

const inMemActions = {
    listCampaigns: () => [{ id: "0a", title: "Demo Campaign" }, { id: "1b", title: "Demo Campaign 2" }],
    fetchCampaign: (id) => {
        switch (id) {
            case "0a":
                return {
                    id: "0a",
                    title: "Demo Campaign",
                    description: "Default values to fill in so that we can use the front-end alone",
                    gm: {
                        name: "Airylan Canth",
                        id: "0a"
                    },
                    players: ["1a", "2b", "1c"],
                    tags: [
                        "test",
                        "squop",
                        "zoom"
                    ],
                    articles: [
                        { id: "a1", title: "First Article" },
                        { id: "a2", title: "Second Article" },
                        { id: "a3", title: "Third Article" }
                    ]
                }
            case "1b":
                return {
                    id: "1b",
                    title: "Demo Campaign 2",
                    description: "Default values to fill in so that we can use the front-end alone",
                    gm: {
                        name: "Airylan Canth",
                        id: "0a"
                    },
                    players: ["1a", "1c", "3f"],
                    tags: [
                        "test",
                        "squop",
                        "zoom"
                    ],
                    articles: [
                        { id: "a1", title: "First Article" },
                        { id: "a2", title: "Second Article" },
                        { id: "a3", title: "Third Article" }
                    ]
                }
            default:
                return null
        }
    },
    fetchArticle: (campaignId, articleId) => {
        /* actual use would have something like the following LINQ-ish:
         * from campaign in campaigns
         * where campaign.Id == campaignId
         * from article in campaign.Articles
         * where article.Id == articleId
         * select article
         */
        switch (campaignId) {
            case "0a": switch (articleId) {
                case "a1": return {
                    title: "First Article",
                    tags: ["test"],
                    content: "# First Article\n\nSome markdown goes here\n\n* test list\n\nDon't get squopped!", //md
                    created: { ooc: "2020-12-03", ic: "2045-10-12" },
                    playerInfo: {
                        revealed: false,
                        content: "Your fixer goes to you one day with a job ..." // md
                    },
                    gmInfo: {
                        content: "Some GM content goes here" // md
                    }
                };
                case "a2": return {
                    title: "Seconed Article",
                    tags: ["squop"],
                    content: "# Seconed Article\n\nSome markdown goes here\n\n* test list\n\nZoom to the future!", //md
                    created: { ooc: "2020-12-03", ic: "2045-10-12" },
                    playerInfo: {
                        revealed: false,
                        content: "Your fixer goes to you one day with a job ..." // md
                    },
                    gmInfo: {
                        content: "Some GM content goes here" // md
                    }
                };
                case "a3": return {
                    title: "Third Article",
                    tags: ["test"],
                    content: "# Third Article\n\nSome markdown goes here\n\n* test list", //md
                    created: { ooc: "2020-12-03", ic: "2045-10-12" },
                    playerInfo: {
                        revealed: false,
                        content: "Your fixer goes to you one day with a job ..." // md
                    },
                    gmInfo: {
                        content: "Some GM content goes here" // md
                    }
                };
                default: return null;
            }
            case "1b": switch (articleId) {
                case "a1": return {
                    title: "1b First Article",
                    tags: ["test"],
                    content: "1b\n\n# First Article\n\nSome markdown goes here\n\n* test list\n\nDon't get squopped!", //md
                    created: { ooc: "2020-12-03", ic: "2045-10-12" },
                    playerInfo: {
                        revealed: false,
                        content: "Your fixer goes to you one day with a job ..." // md
                    },
                    gmInfo: {
                        content: "Some GM content goes here" // md
                    }
                };
                case "a2": return {
                    title: "1b Seconed Article",
                    tags: ["squop"],
                    content: "1b\n\n# Seconed Article\n\nSome markdown goes here\n\n* test list\n\nZoom to the future!", //md
                    created: { ooc: "2020-12-03", ic: "2045-10-12" },
                    playerInfo: {
                        revealed: false,
                        content: "Your fixer goes to you one day with a job ..." // md
                    },
                    gmInfo: {
                        content: "Some GM content goes here" // md
                    }
                };
                case "a3": return {
                    title: "1b Third Article",
                    tags: ["test"],
                    content: "1b\n\n# Third Article\n\nSome markdown goes here\n\n* test list", //md
                    created: { ooc: "2020-12-03", ic: "2045-10-12" },
                    playerInfo: {
                        revealed: false,
                        content: "Your fixer goes to you one day with a job ..." // md
                    },
                    gmInfo: {
                        content: "Some GM content goes here" // md
                    }
                };
                default: return null;
            }
            default: return null;
        }
    },
    fetchArticlesByTag: (campaignId, tag) => {
        switch (campaignId) {
            case "0a": switch (tag) {
                case "test": return [{ id: "a1", title: "First Article" }, { id: "a3", title: "Third Article" }];
                case "squop": return [{ id: "a2", title: "Second Article" }];
                default: return null;
            }
            case "1b": switch (tag) {
                case "test": return [{ id: "a1", title: "1b First Article" }, { id: "a3", title: "1b Third Article" }];
                case "squop": return [{ id: "a2", title: "1b Second Article" }];
                default: return null;
            }
            default: return null;
        }
    }
};

const amplifyStorageActions = {
    /* To fill out when we get to AWS Amplify */
};

const campaignStorage = inMemActions;

const store = createStore({
    initialState: {
        campaigns: [
            {
                id: "0a",
                title: "Demo Campaign",
                description: "Default values to fill in so that we can use the front-end alone",
                gm: {
                    name: "Airylan Canth",
                    id: "0a"
                },
                players: ["1a", "2b", "1c"],
                tags: [
                    "test",
                    "squop",
                    "zoom"
                ],
                articles: [
                    { id: "a1", title: "First Article" },
                    { id: "a2", title: "Second Article" },
                    { id: "a3", title: "Third Article" }
                ]
            },
            {
                id: "1b",
                title: "Demo Campaign 2",
                description: "Default values to fill in so that we can use the front-end alone",
                gm: {
                    name: "Airylan Canth",
                    id: "0a"
                },
                players: ["1a", "1c", "3f"],
                tags: [
                    "test",
                    "squop",
                    "zoom"
                ],
                articles: [
                    { id: "a1", title: "First Article" },
                    { id: "a2", title: "Second Article" },
                    { id: "a3", title: "Third Article" }
                ]
            }
        ]
    },
    actions: {
        // TODO: these will need to be async or subscribe or something to actually talk to the web.
        switchCampaign: (id) => ({ getState, setState }) => {
            if (getState().id !== id) {
                setState(campaignStorage.fetchCampaign(id));
            }
        },
        fetchArticle: (articleId) => ({ getState }) => {
            return campaignStorage.fetchArticle(getState().id, articleId);
        },
        fetchArticlesByTag: (tagId) => ({ getState }) => {
            return campaignStorage.fetchArticlesByTag(getState().id, tagId);
        },
        loadCampaigns: () => async ({ getState, setState }) => {
            if (getState().loading === true) {
                return;
            }

            setState({ loading: true });
            const models = await DataStore.query(Campaign);
            setState({ campaigns: models, loading: false });
        },
        loadCampaign: (campaignId) => async ({ getState, setState }) => {
            if (getState().laoding === true) {
                return;
            }

            setState({ loading: true });
            const models = await Datastore.query(Campaign); // TODO: filter to just the one campaign.
            setState({ campaigns: models, loading: false });
        }
    }
});

const campaignSelector = (state, id) => state.campaigns.find(x => x.id === id);

export const useCampaign = createHook(store, { selector: campaignSelector });
export const useCampaigns = createHook(store);