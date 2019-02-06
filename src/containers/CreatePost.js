import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import CreatePost from '../components/body/CreatePost';
import { addPost } from '../actions/post';
import { switchPage } from "../actions/menu";

const mapStateToProps = state => {
    const props = {
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    addPost,
    switchPage,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(CreatePost));