import { createAction } from 'redux-actions';
import axios from 'axios';

export const addPostRequest = createAction('ADD_POST_REQUEST');
export const addPostSuccess = createAction('ADD_POST_SUCCESS');
export const addPostFailure = createAction('ADD_POST_FAILURE');

export const addPost = (values) => async dispatch => {
    dispatch(addPostRequest());
    const path = `/api/posts`;
    const image = values.image ? `/images/posts/${values.image}`: '';
    const item = {
        ...values,
        image,
        date: new Date(),
    };
    try {
        const res = await axios.post(path, item);
        dispatch(addPostSuccess(res.data));
    } catch (e) {
        alert(`не удалось создать пост, попробуйте еще раз ${e}`);
        dispatch(addPostFailure());
    }
};

export const deletePostRequest = createAction('DELETE_POST_REQUEST');
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS');
export const deletePostFailure = createAction('DELETE_POST_FAILURE');

export const deletePost = (item) => async dispatch => {
    console.log(item);
    dispatch(deletePostRequest());
    const path = `/api/posts/${item._id}`;
    try {
        const res = await axios.delete(path);
        console.log(res.data);
        dispatch(deletePostSuccess(item));
    } catch (e) {
        alert(`не удалось удалить пост, попробуйте еще раз ${e}`);
        dispatch(deletePostFailure());
    }
};

export const updatePostRequest = createAction('UPDATE_POST_REQUEST');
export const updatePostSuccess = createAction('UPDATE_POST_SUCCESS');
export const updatePostFailure = createAction('UPDATE_POST_FAILURE');

export const updatePost = (values) => async dispatch => {
    dispatch(updatePostRequest());
    const path = `/api/posts/${values._id}`;
    const image = values.image ? `/images/posts/${values.image}`: '';
    const item = {
        ...values,
        image,
        date: new Date(),
    };
    try {
        const res = await axios.put(path, item);
        dispatch(updatePostSuccess(res.data));
    } catch (e) {
        alert(`не удалось изменить пост, попробуйте еще раз ${e}`);
        dispatch(updatePostFailure());
    }
};