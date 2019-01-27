import {createAction} from "redux-actions";


export const setFilterNumbers = createAction('ONLY_NUMBERS');
export const setFilterParts = createAction('SET_FILTER_PARTS');
export const setFilterSmartphones = createAction('SET_FILTER_SMARTPHONES');
export const setSearchQuery = createAction('SET_SEARCHQUERY');
export const reset = createAction('RESET');