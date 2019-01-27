import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import UpdateItem from '../components/body/UpdateItem';
import { updateItem } from '../actions/item';

const findItem = (type, id, parts, phones, numbers) => {
    switch (type) {
        case 'parts':
            return parts.find(i => i._id === id);
        case 'phones':
            return phones.find(i => i._id === id);
        case 'numbers':
            return numbers.find(i => i._id === id);
        default:
            return {};
    }
};

const mapStateToProps = (state , router) => {
    const parts = state.parts.items;
    const phones = state.smartphones.items;
    const numbers = state.numbers.items;
    const { type, id } = router.match.params;
    const item = findItem(type, id, parts, phones, numbers);

    const props = {
        siteColor: state.siteColor,
        initialValues: item,
    };
    return props;
};

const actions = {
    updateItem,
};

export default withRouter(connect(
    mapStateToProps,
    actions,
)(UpdateItem));