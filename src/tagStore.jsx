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
            const models = await DataStore.query(Tag/*, c => c.article.campaignId === campaignId*/);
            console.log(models);
            setState({ tags: models, loading: false });
        }
    }
});

const selectors = {
    tagSelector: (state, tagId) => state.tags.find(x => x.id === tagId)
};

export const useTags = createHook(tagStore);
export const useTag = createHook(tagStore, { selector: selectors.tagSelector });