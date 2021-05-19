const viewReducer = (state = true, action) => {
    switch (action.type) {
        case 'CHANGE_VIEW':
            state = !state;
            break;
        default:
            state = true;
    }
    return state;
}

export default viewReducer;