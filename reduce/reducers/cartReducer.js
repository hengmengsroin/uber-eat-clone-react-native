let defaultState = {
    selectedItems: {
        items: [],
        restaurantName: ""
    }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "AddToCart":
            let newState = { ...state }
            if (action.payload.checkBox) {
                console.log('add to cart');
                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurantName: action.payload.restaurantName,
                }


            } else {
                console.log('remove from cart');
                newState.selectedItems = {
                    items: [...newState.selectedItems.items.filter(item => item.name !== action.payload.name)],
                    restaurantName: action.payload.restaurantName,
                }
            }
            console.log(newState);
            return state;
        default:
            return state;
    }
}

export default cartReducer;