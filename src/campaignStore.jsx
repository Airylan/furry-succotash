import { createStore, createHook } from 'react-sweet-state';

const inMemActions = {
    listCampaigns: () => ["0a", "1b"],
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
    }
};

const amplifyStorageActions = {
    /* To fill out when we get to AWS Amplify */
};

const campaignStorage = inMemActions;

const store = createStore({
    initialState: {
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
    actions: {
        switchCampaign: (id) => ({ setData }) => {
            setData(campaignStorage.fetchCampaign(id));
        }
    }
});

export const useCampaign = createHook(store);
export const listCampaigns = campaignStorage.listCampaigns;