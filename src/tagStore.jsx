import { createStore, createHook } from 'react-sweet-state';
import { DataStore } from '@aws-amplify/datastore';
import { Tag, TagArticle } from './models';

const tagStore = createStore({
    initialState: {
        tags: []
    },
    actions: {
        loadTags: (campaignId) => async ({ getState, setState }) => {
            if (getState().loading === true) return;

            setState({ loading: true });
            const models = await DataStore.query(Tag, c => c.campaignId === campaignId);
            console.log(models);
            setState({ tags: models, loading: false });
        },
        loadTag: (tagId) => async ({ getState, setState }) => {
            if (getState().loading === true) return;

            setState({ loading: true });
            const model = await DataStore.query(Tag, tagId);
            console.log(model);
            setState({ tags: [model], loading: false });
        },
        fetchArticlesByTag: (tagId) => async ({ getState, setState }) => {
            if (getState().loading === true) return;

            setState({ loading: true });
            const articles = await DataStore.query(TagArticle, c => c.tag.id === tagId);
            const tags = getState().tags.map(x => x.id === tagId ? { ...x, articles: articles.map(c => c.article) } : x);
            console.log(tags);
            setState({ tags: tags, loading: false });
        }
    }
});

const selectors = {
    tagSelector: (state, tagId) => state.tags.find(x => x.id === tagId)
};

export const useTags = createHook(tagStore);
export const useTag = createHook(tagStore, { selector: selectors.tagSelector });