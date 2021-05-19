const totalItemsReducer = (state = 0, action) => {
    switch (action.type) {
        case 'CHANGE_ITEM_COUNT':
            state += action.payload;
            break;
        default:
            break;
    }
    return state;
}

export default totalItemsReducer;