import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import * as actions from '../../actions/items';
import { addItemSuccess, deleteItemSuccess, updateItemSuccess } from '../../actions/item';



const items = handleActions({
    [actions.setItemsSuccess](state, { payload: { items } }) {
        const parts = items.filter(item => item.type === 'parts');
        return [...state, ...parts];
    },
    [addItemSuccess](state, { payload }) {
        if (payload.type === 'parts') {
            return [...state, payload];
        }
        return state;
    },
    [deleteItemSuccess](state, { payload }) {
        if (payload.type === 'parts') {
            return state.filter(item => !(item._id === payload._id));
        }
        return state;
    },
    [updateItemSuccess](state, { payload }) {
        if (payload.type === 'parts') {
            const filteredState = state.filter(i => !(i._id === payload._id));
            return [...filteredState, payload];
        }
        return state;
    }
}, []);

const models = handleActions({
    [actions.setModelsItems] (state, { payload }) {
        const parts = payload.filter(item => item.type === 'parts');
        const models = parts.reduce((acc, item) => {
            const md = `${item.firm} ${item.model}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        return models;
    }
}, []);

const parts = combineReducers({
    items,
    models,
});

export default parts;