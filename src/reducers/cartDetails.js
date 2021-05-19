import { getValue, setValue } from '../utilities/main.js';

const addProduct = (state, details) => {
    let product = state.find(product => getValue(product, 'productDetails.id') === getValue(details, 'id'));
    if (!product) {
        state.push({
            count: 1,
            productDetails: details
        });
    } else {
        setValue(product, 'count', getValue(product, 'count') + 1);
    }
}

const removeProduct = (state, id) => {
    let itemIndex = state.findIndex(product => getValue(product, 'productDetails.id') === id);
    let productToBeRemoved = state[itemIndex];
    let presentCount = getValue(productToBeRemoved, 'count');
    if (presentCount === 1) {
        state.splice(itemIndex, 1);
    } else {
        setValue(productToBeRemoved, 'count', presentCount - 1);
    }
}

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            addProduct(state, getValue(action, 'payload'));
            break;
        case 'REMOVE_PRODUCT':
            removeProduct(state, getValue(action, 'payload'));
            break;
        default:
            break;
    }
    return state;
};

export default cartReducer;
