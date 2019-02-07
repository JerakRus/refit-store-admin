import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Post from '../components/body/Post';
import { deletePost } from "../actions/post";

const formatDate = date => {

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
};
const date = new Date();

const mapStateToProps = (state, {post}) => {
    console.log(post);
    const props = {
        date: formatDate(post.date || date),
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
