import React from 'react';
import { Container } from 'semantic-ui-react';
import PostContainer from '../../containers/Post';


const Home = (props) => {
    return (
      <Container text>
          {props.posts.map(post => <PostContainer key={post._id} post={post} />)}
      </Container>
    );
};

export default Home;