import { connect } from 'react-redux';
import { withRouter} from "react-router-dom";
import CreateItem from '../components/body/CreateItem';
import { addItem } from '../actions/item';
import { switchPage } from "../actions/menu";

const mapStateToProps = state => {
    const props = {
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    addItem,
    switchPage,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(CreateItem));