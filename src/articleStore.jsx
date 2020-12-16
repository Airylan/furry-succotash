import { createStore, createHook } from 'react-sweet-state';
import { DataStore } from '@aws-amplify/datastore';
import { Article, TagArticle } from './models';

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
        loadArticles: () => async ({ getState, setState }) => {
            if (getState().loading === true) return;

            setState({ loading: true });
            const models = await DataStore.query(Article);
            console.log(models);
            setState({ articles: models, loading: false });
        },
        loadArticle: (articleId) => async ({ getState, setState }) => {
            if (getState().loading === true) return;

            setState({ loading: true });
            const model = await DataStore.query(Article, articleId);
            const tags = await DataStore.query(TagArticle, c => c.article.id === articleId);
            console.log(model);
            setState({ articles: [{ ...model, tags: tags.map(x => x.tag) }], loading: false });
        },
        saveArticle: ({ articleId, ...article }) => async ({ dispatch }) => {
            let result = {};
            if (articleId) {
                // This is an update action
                const original = await DataStore.query(Article, articleId);
                result = await DataStore.save(Article.copyOf(original, update => {
                    update.title = article?.title ?? original.title;
                    update.content = article?.content ?? original.title;
                    update.gmInfo = article?.gmInfo ?? original.gmInfo;
                    update.playerInfo = article?.playerInfo ?? original.playerInfo;
                    update.createdDate = article?.createdDate ?? original.createdDate;
                    update.campaign = article?.campaign ?? original.campaign;
                }));
            }
            else {
                result = await DataStore.save(new Article(article));
            }

            dispatch(loadArticle(result.id));
            return articleId;
        }
    }
});

const awsSelectors = {
    selectArticle: (state, articleId) => state?.articles?.find(x => x.id === articleId)
}

const selectors = awsSelectors;

export const useArticles = createHook(articleStore);
export const useArticle = createHook(articleStore, { selector: selectors.selectArticle });
