import { handleActions } from 'redux-actions';
import { combineReducers} from "redux";
import * as actions from '../../actions/items';
import {addItemSuccess, deleteItemSuccess, updateItemSuccess} from "../../actions/item";



const items = handleActions({
    [actions.setItemsSuccess](state, { payload: { items } }) {
        const numbers = items.filter(item => item.type === 'numbers');
        return [...state, ...numbers];
    },
    [addItemSuccess](state, { payload }) {
        if (payload.type === 'numbers') {
            return [...state, payload];
        }
        return state;
    },
    [deleteItemSuccess](state, { payload }) {
        if (payload.type === 'numbers') {
            return state.filter(item => !(item._id === payload._id));
        }
        return state;
    },
    [updateItemSuccess](state, { payload }) {
        if (payload.type === 'numbers') {
            const filteredState = state.filter(i => !(i._id === payload._id));
            return [...filteredState, payload];
        }
        return state;
    },
}, []);

const numbers = combineReducers({
    items,
});

export default numbers;