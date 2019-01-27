import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import _ from 'lodash';

export default class FilterMenu extends Component {

    handleParts = (e, { name }) => {
        this.props.setFilterParts(name);
    };

    handleSmartphones = (e, { name }) => {
        this.props.setFilterSmartphones(name);
    };

    handleSearch = (e) => {
        this.props.setSearchQuery(e.target.value);
    };

    renderParts() {
        const { modelsParts } = this.props;
        const activeItem = this.props.filter.parts;

        return (
            <Menu.Item >
                Запчасти и Комплектующие
                <Menu.Menu>
                    <Menu.Item name="all" active={activeItem === "all"} onClick={this.handleParts}>
                        Все
                    </Menu.Item>
                    {modelsParts.map(model => (
                        <Menu.Item key={_.uniqueId()}
                                   name={model}
                                   active={activeItem === model}
                                   onClick={this.handleParts}>
                            {model}
                        </Menu.Item>
                    ))}
                </Menu.Menu>
            </Menu.Item>
        )
    }

    renderSmartphones () {
        const { modelsSmartphones } = this.props;
        const activeItem = this.props.filter.smartphones;

        return (
            <Menu.Item>
                Телефоны
                <Menu.Menu>
                    <Menu.Item name="all" active={activeItem === "all"} onClick={this.handleSmartphones}>
                        Все
                    </Menu.Item>
                    {modelsSmartphones.map(model => (
                        <Menu.Item key={_.uniqueId()}
                                   name={model}
                                   active={activeItem === model}
                                   onClick={this.handleSmartphones}>
                            {model}
                        </Menu.Item>
                    ))}
                </Menu.Menu>
            </Menu.Item>
        )
    }

    renderNumbers() {
        const activeItem = this.props.filter.numbers;
        return (
            <Menu.Item name='number' active={activeItem === 'all'} onClick={this.props.setFilterNumbers.bind(this, 'all')}>
                Красивые номера
            </Menu.Item>
        );
    }

    render() {
        return (
            <Menu vertical {...this.props.siteColor}  >
                <Menu.Item>
                    <Input placeholder='Поиск...' icon="search" value={this.props.filter.searchQuery} onChange={this.handleSearch} />
                </Menu.Item>
                {this.props.modelsParts && this.renderParts()}
                {this.props.modelsSmartphones && this.renderSmartphones()}
                {this.renderNumbers()}
            </Menu>
        );
    }
}
