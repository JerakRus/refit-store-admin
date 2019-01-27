import { handleActions } from 'redux-actions';
import {combineReducers} from "redux";
import * as actions from '../../actions/items';
import {addItemSuccess, deleteItemSuccess, updateItemSuccess} from "../../actions/item";



const items = handleActions({
    [actions.setItemsSuccess](state, { payload: { items } }) {
        const smartphones = items.filter(item => item.type === 'phones');
        return [...state, ...smartphones];
    },
    [addItemSuccess](state, { payload }) {
        if (payload.type === 'phones') {
            return [...state, payload];
        }
        return state;
    },
    [deleteItemSuccess](state, { payload }) {
        if (payload.type === 'phones') {
            return state.filter(item => !(item._id === payload._id));
        }
        return state;
    },
    [updateItemSuccess](state, { payload }) {
        if (payload.type === 'phones') {
            const filteredState = state.filter(i => !(i._id === payload._id));
            return [...filteredState, payload];
        }
        return state;
    },
}, []);

const models = handleActions({
    [actions.setModelsItems] (state, { payload }) {
        const smartphones = payload.filter(item => item.type === 'phones');
        const models = smartphones.reduce((acc, item) => {
            const md = `${item.firm}`;
            return acc.includes(md) ? acc : [...acc, md];
        }, []);
        return models;
    }
}, []);

const smartphones = combineReducers({
    items,
    models,
});

export default smartphones;