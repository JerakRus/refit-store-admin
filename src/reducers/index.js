import { combineReducers } from 'redux';
import { siteColor, menuPage } from './Menu';
import parts  from "./shop/Parts";
import smartphones from './shop/smartphones';
import numbers from "./shop/Numbers";
import { itemsLoaded } from './shop/Items';
import postsHomePage from './Posts';
import filter from './Filter';
import form from './shop/form';

export default combineReducers({
    menuPage,
    siteColor,
    postsHomePage,
    itemsLoaded,
    parts,
    smartphones,
    numbers,
    filter,
    form,
});

