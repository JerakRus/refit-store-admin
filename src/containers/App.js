import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import App from '../components/App';
import { setItems } from '../actions/items';


const mapStateToProps = state => state;

const actions = {
    setItems,
};


export default withRouter(connect(
    mapStateToProps,
    actions,
)(App));

