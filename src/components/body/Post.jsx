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
        const { post, date } = this.props;
        const mediaLibrary = '//195.133.146.22:3000';

        return (
        <Segment.Group >
            <Segment padded size='large'>
                <Header as='h2'>{post.title}</Header>
                {this.props.post.image && <Image size='large' centered src={`${mediaLibrary}${post.image}`}/>}
                <p>
                    {post.text}
                </p>
            </Segment>
            <Segment basic textAlign='right'>
                <i style={{ color: 'grey'}}> Опубликовано &nbsp; {date} </i>
            </Segment>
            <Segment basic textAlign='right'>
                <Button  {...this.props.siteColor} onClick={this.handlerUpdate(post)}>
                    Изменить
                </Button>
                <Button color='red' onClick={this.handlerRemove(post)}>
                    Удалить
                </Button>
            </Segment>
        </Segment.Group>
        );
    }
};