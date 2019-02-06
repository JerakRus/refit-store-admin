import React from 'react'
import {Button, Header, Image, Segment} from 'semantic-ui-react'


export default class Post extends React.Component {

    handlerUpdate = item => e => {
        this.props.history.push(`/updatePost/${item._id}`);
    }

    handlerRemove = item => e => {
        this.props.deletePost(item);
    }

    render() {
        const { post } = this.props;
        return (
        <Segment size='large'>
            <Header as='h2'>{post.title}</Header>
            {this.props.post.image && <Image centered src={`//localhost:3000${post.image}`}/>}
            <p>
                {post.text}
            </p>
                <Button basic {...this.props.siteColor} onClick={this.handlerUpdate(post)}>
                    Изменить
                </Button>
                <Button color='red' basic onClick={this.handlerRemove(post)}>
                    Удалить
                </Button>
        </Segment>
        );
    }
};