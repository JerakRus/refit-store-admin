import { createAction } from 'redux-actions';
import axios from 'axios';


//I get a list of items from the server, I add to the state and create a list of parts, phones, numbers, modelsParts, modelsPhones.
//It is used to automatic display the filter for all available models.
export const setItemsRequest = createAction('SET_ITEMS_REQUEST');
export const setItemsSuccess = createAction('SET_ITEMS_SUCCESS');
export const setItemsFailure = createAction('SET_ITEMS_FAILURE');

export const setModelsItems = createAction('SET_MODELS_ITEMS');

export const setItems = () => async (dispatch) => {
    dispatch(setItemsRequest());
    try {
        const response = await axios.get('/api/items');
        console.log(response.data);
        dispatch(setItemsSuccess({ items: response.data }));
        dispatch(setModelsItems(response.data));
    } catch (e) {
        alert(`Не получилось загрузить список товаров, неполадки на сервере :( ${e}`);
        dispatch(setItemsFailure());
    }
};