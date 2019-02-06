import { createAction } from 'redux-actions';
import axios from 'axios';


//I get a list of posts from the server,
//It is used to display on home page
export const setPostsRequest = createAction('SET_POSTS_REQUEST');
export const setPostsSuccess = createAction('SET_POSTS_SUCCESS');
export const setPostsFailure = createAction('SET_POSTS_FAILURE');


export const setPosts = () => async (dispatch) => {
    dispatch(setPostsRequest());
    try {
        const response = await axios.get('/api/posts');
        dispatch(setPostsSuccess({ posts: response.data }));
    } catch (e) {
        alert(`Не получилось загрузить список постов главной страницы, неполадки на сервере :( ${e}`);
        dispatch(setPostsFailure());
    }
};