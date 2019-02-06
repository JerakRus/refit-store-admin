import { handleActions } from 'redux-actions';
import * as actions from '../actions/posts';
import { addPostSuccess, deletePostSuccess, updatePostSuccess } from '../actions/post';
import _ from 'lodash';


const postsHomePage = handleActions({
    [actions.setPostsSuccess](state, { payload: { posts } }) {
        return [...state, ..._.reverse(posts)];
    },
    [addPostSuccess](state, { payload }) {
        const newState = state.slice();
        newState.unshift(payload);
        console.log(newState);
        return newState;
    },
    [deletePostSuccess](state, { payload: { _id } }) {
        return state.filter(post =>!(post._id === _id));
    },
    [updatePostSuccess](state, { payload }) {
        const newState = state.slice();
        const index = newState.findIndex(post => post._id === payload._id);
        newState[index] = payload;
        return newState;
    }
}, []);

export default postsHomePage;