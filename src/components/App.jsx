import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";


import MenuContainer from '../containers/Menu';
import HomeContainer from "../containers/Home";
import Contacts from "./body/Contacts";
import CreateItemContainer from "../containers/CreateItem";
import UpdateItemContainer from '../containers/UpdateItem';
import CreatePostContainer from "../containers/CreatePost";
import UpdatePostContainer from '../containers/UpdatePost';
import ShopContainer from "../containers/Shop";
import Logo from './Logo';
import Footer from './Footer';




class App extends Component {
    componentWillMount()  {
        this.props.setPosts();
        this.props.setItems();
        this.props.history.push('/');
    }

    render() {
      return (
        <Container >
            <Logo />
            <MenuContainer />
            <Switch>
                <Route path='/' exact component={HomeContainer} />
                <Route path='/shop' component={ShopContainer} />
                <Route path='/createItem' component={CreateItemContainer} />
                <Route path='/updateItem/:type/:id' component={UpdateItemContainer} />
                <Route path='/createPost' component={CreatePostContainer} />
                <Route path='/updatePost/:id' component={UpdatePostContainer} />
                <Route path='/contacts' component={Contacts} />
            </Switch>
            <Footer {...this.props.siteColor} />
        </Container>
      );
    }
}

export default App;
