import React from 'react';
import _ from 'lodash';
import { Card, Grid } from 'semantic-ui-react';
import ItemShopContainer from "../../containers/ItemShop";
import FilterContainer from '../../containers/Filter';

export default class Shop extends React.Component {

    renderParts() {
        const { parts } = this.props;
        return (
            <Card.Group>
                {parts.map(item => <ItemShopContainer key={_.uniqueId()} item={item} />)}
            </Card.Group>
        );
    }

    renderSmartphones() {
                const { smartphones } = this.props;
                return (
                    <Card.Group >
                        {smartphones.map(item => <ItemShopContainer key={_.uniqueId()} item={item} />)}
                    </Card.Group>
                );
    }

    renderNumbers() {
        const { numbers } = this.props;
        return (
            <Card.Group >
                {numbers.map(item => <ItemShopContainer key={_.uniqueId()} item={item} />)}
            </Card.Group>
        );
    }

    render () {
        return (
            <Grid stackable>
                <Grid.Column width={3}>
                    <FilterContainer />
                </Grid.Column>
                <Grid.Column width={13}>
                        {this.renderParts()}
                        {this.renderSmartphones()}
                        {this.renderNumbers()}
                </Grid.Column>
            </Grid>
        );
    }
};