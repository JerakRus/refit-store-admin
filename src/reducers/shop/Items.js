import {handleActions} from "redux-actions";
import * as actions from "../../actions/items";


export const itemsLoaded = handleActions({
    [actions.setItemsRequest]() {
        return 'requested';
    },
    [actions.setItemsSuccess]() {
        return 'successed';
    },
    [actions.setItemsFailure]() {
        return 'failed';
    },
}, 'none');