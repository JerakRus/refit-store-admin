import React from 'react';
import { Container } from 'semantic-ui-react';
import PostContainer from '../../containers/Post';
import Paint from "./Paint";

const Home = (props) => {
    const arr = [
        { item: 20, count: 1 },
        { item: 40, count: 2 },
        { item: 55, count: 5 }
    ];
    return (
      <Container >
          {props.posts.map(post => <PostContainer key={post._id} post={post} />)}
      </Container>
    );
};

export default Home;

/* <Container textAlign='center'>
    <Paint data={arr} width={1000} height={500} animDuration={2000}/>
</Container> */