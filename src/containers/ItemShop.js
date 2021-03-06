import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemShop from '../components/body/ItemShop';
import { deleteItem } from "../actions/item";

const mapStateToProps = (state) => {
    const props = {
        siteColor: state.siteColor,
    };
    return props;
};

const actions = {
    deleteItem,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(ItemShop));
