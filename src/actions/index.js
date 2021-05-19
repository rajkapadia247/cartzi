export const changeView = () => {
    return {
        type: 'CHANGE_VIEW'
    }
}

export const addItem = (payload) => {
    return {
        type: 'ADD_PRODUCT',
        payload
    };
}

export const changeTotalItemCount = (payload) => {
    return {
        type: 'CHANGE_ITEM_COUNT',
        payload
    };
}

export const removeItem = (payload) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload
    }
}