import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import App from '../components/App';
import { setItems } from '../actions/items';
import { setPosts } from "../actions/posts";


const mapStateToProps = state => state;

const actions = {
    setItems,
    setPosts,
};


export default withRouter(connect(
    mapStateToProps,
    actions,
)(App));

