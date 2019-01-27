import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Menu from '../components/Menu';
import { reset } from '../actions/filter';
import { switchPage } from "../actions/menu";

const mapStateToProps = state => {
    const props = {
        menuPage: state.menuPage,
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    switchPage,
    reset
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(Menu));
