import { connect } from 'react-redux';
import Home from '../components/body/Home';

const mapStateToProps = state => {
    const props = {
        posts: state.postsHomePage,
        siteColor: state.siteColor,
    };
    return props;
};


export default connect(
    mapStateToProps,
)(Home);