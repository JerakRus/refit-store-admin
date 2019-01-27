import { handleActions } from 'redux-actions';
import * as actions from '../actions/filter';

const initState = {
    parts: 'all',
    smartphones: 'all',
    numbers: 'all',
    searchQuery: '',
};

const filter = handleActions({
    [actions.setFilterParts](state, { payload }) {
        const newState = {
            parts: payload,
            smartphones: 'none',
            numbers: 'none',
            searchQuery: state.searchQuery,
        };
        return newState;
    },
    [actions.setFilterSmartphones](state, { payload }) {
        const newState = {
            parts: 'none',
            smartphones: payload,
            numbers: 'none',
            searchQuery: state.searchQuery,
        };
        return newState;
    },
    [actions.setFilterNumbers](state, { payload }) {
        const newState = {
            parts: 'none',
            smartphones: 'none' ,
            numbers: payload,
            searchQuery: state.searchQuery,
        };
        return newState;
    },
    [actions.setSearchQuery](state, { payload }) {
        const newState = {
            ...state,
            searchQuery: payload,
        };
        return newState;
    },
    [actions.reset](state) {
        return initState;
    }
}, initState);

export default filter;

