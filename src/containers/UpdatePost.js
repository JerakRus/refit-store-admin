import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import UpdatePost from '../components/body/UpdatePost';
import { updatePost } from '../actions/post';


const mapStateToProps = (state , router) => {
    const posts = state.postsHomePage;
    const { id } = router.match.params;
    const item = posts.find(i => i._id === id);
    const props = {
        siteColor: state.siteColor,
        initialValues: item,
    };
    return props;
};

const actions = {
    updatePost,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(UpdatePost));