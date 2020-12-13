import { createStore, createHook } from 'react-sweet-state';
import { DataStore } from '@aws-amplify/datastore';
import { Article } from './models';

const articleStore = createStore({
    initialState: {
        articles: [
            {
                id: "a1",
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
            },
            {
                id: "a2",
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
            },
            {
                id: "a3",
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
            }
        ]
    },
    actions: {
        setArticles: (articles) => ({ setState }) => setState({ articles: articles }),
        setArticle: (article) => ({ getState, setState }) => {
            setState({ articles: getState().articles.map(x => x.id === article.id ? article : x) });
            backendActions.saveArticle(article);
        },
        loadArticles: () => async ({ getState, setState }) => {
            if (getState().loadingArticles === true) return;

            setState({ loadingArticles: true });
            const models = await DataStore.query(Article);
            console.log(models);
            setState({ articles: models, loadingArticles: false });
        }
    }
});

const inMemorySelectors = {
    selectArticle: (state, { campaignId, articleId }) => state.articles.find(x => x.id === articleId)
};
const awsSelectors = {
    // selectArticle: (state, articleId) => to find out later.
}

const selectors = awsSelectors;

export const useArticles = createHook(articleStore);
export const useArticle = createHook(articleStore, { selector: selectors.selectArticle });
