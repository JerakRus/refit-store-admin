import { createAction } from 'redux-actions';
import axios from 'axios';

export const addItemRequest = createAction('ADD_ITEM_REQUEST');
export const addItemSuccess = createAction('ADD_ITEM_SUCCESS');
export const addItemFailure = createAction('ADD_ITEM_FAILURE');

export const addItem = (values) => async dispatch => {
    dispatch(addItemRequest());
    const path = `/api/items`;
    const model = values.model ? values.model : '';
    const image = values.image ? `/images/${values.type}/${values.image}`: '';
    const item = {
        ...values,
        model,
        image,
        addCount: 0,
    };
    try {
        const res = await axios.post(path, item);
        dispatch(addItemSuccess(res.data));
    } catch (e) {
        alert(`не удалось создать элемент, попробуйте еще раз ${e}`);
        dispatch(addItemFailure());
    }
};

export const deleteItemRequest = createAction('DELETE_ITEM_REQUEST');
export const deleteItemSuccess = createAction('DELETE_ITEM_SUCCESS');
export const deleteItemFailure = createAction('DELETE_ITEM_FAILURE');

export const deleteItem = (item) => async dispatch => {
    dispatch(deleteItemRequest());
    const path = `/api/items/${item._id}`;
    try {
        const res = await axios.delete(path);
        console.log(res.data);
        dispatch(deleteItemSuccess(item));
    } catch (e) {
        alert(`не удалось удалить элемент, попробуйте еще раз ${e}`);
        dispatch(deleteItemFailure());
    }
};

export const updateItemRequest = createAction('UPDATE_ITEM_REQUEST');
export const updateItemSuccess = createAction('UPDATE_ITEM_SUCCESS');
export const updateItemFailure = createAction('UPDATE_ITEM_FAILURE');

export const updateItem = (values) => async dispatch => {
    dispatch(updateItemRequest());
    const path = `/api/items/${values._id}`;
    const model = values.model ? values.model : '';
    const image = values.image ? `/images/${values.type}/${values.image}`: '';
    const item = {
        ...values,
        model,
        image,
        addCount: 0,
    };
    try {
        const res = await axios.put(path, item);
        dispatch(updateItemSuccess(res.data));
    } catch (e) {
        alert(`не удалось изменить элемент, попробуйте еще раз ${e}`);
        dispatch(updateItemFailure());
    }
};