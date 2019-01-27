import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from "react-router-dom";


import MenuContainer from '../containers/Menu';
import Home from "./body/Home";
import Contacts from "./body/Contacts";
import CreateItem from "../containers/CreateItem";
import UpdateItem from '../containers/UpdateItem';
import ShopContainer from "../containers/Shop";
import Logo from './Logo';
import Footer from './Footer';




class App extends Component {
    componentWillMount()  {
        this.props.setItems();
        //this.props.history.push('/');
    }

    render() {
      return (
        <Container >
            <Logo />
            <MenuContainer />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/shop' component={ShopContainer} />
                <Route path='/createItem' component={CreateItem} />
                <Route path='/updateItem/:type/:id' component={UpdateItem} />
                <Route path='/contacts' component={Contacts} />
            </Switch>
            <Footer {...this.props.siteColor} />
        </Container>
      );
    }
}

export default App;
