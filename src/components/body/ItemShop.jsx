import React from 'react';
import { Button, Card, Icon, Image} from 'semantic-ui-react';


export default class ItemShop extends React.Component {

    handlerChangeItem = item => e => {
        this.props.history.push(`/updateItem/${item.type}/${item._id}`);
    }

    handlerRemoveItem = item => e => {
        this.props.deleteItem(item);
    }

    render() {
        const { item } = this.props;
        const mediaLibrary = 'http://195.133.146.22:3000';
        const path = item.image ? `${mediaLibrary}${item.image}`: null;
        return (
        <Card {...this.props.siteColor}>
            <Image src={path} />
            <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                    <span>{item.firm}</span>
                </Card.Meta>
                <Card.Description>{item.price}<Icon name="rub"/></Card.Description>
                <Card.Description>{item.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button {...this.props.siteColor} onClick={this.handlerChangeItem(item)}>
                        Изменить
                    </Button>
                    <Button color='red' onClick={this.handlerRemoveItem(item)}>
                        Удалить
                    </Button>
                </div>
            </Card.Content>
        </Card>
        );
    }
};
