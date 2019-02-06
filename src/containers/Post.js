import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Post from '../components/body/Post';
import { deletePost } from "../actions/post";

const mapStateToProps = (state) => {
    const props = {
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    deletePost,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(Post));
