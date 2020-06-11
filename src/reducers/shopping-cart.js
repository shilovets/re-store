const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        };
    }

    switch (action.type) {
        case 'CARTOON_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);


        case 'CARTOON_REMOVED_FROM_CART' :
            return updateOrder(state, action.payload, -1);

        case 'ALL_CARTOONS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state.shoppingCart;
    }
};

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    } else {
        return [
            ...cartItems.slice(0, idx),
            item,
            ...cartItems.slice(idx + 1)
        ];
    }
};

const updateCartItem = (cartoon, item = {}, quantity) => {
    const {
        id = cartoon.id,
        title = cartoon.title,
        count = 0,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * cartoon.price
    };
};

const updateOrder = (state, cartoonId, quantity) => {

    const {cartoonsList: {cartoons}, shoppingCart: {cartItems}} = state;

    const cartoon = cartoons.find(({id}) => id === cartoonId);
    const itemIndex = cartItems.findIndex(({id}) => id === cartoonId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(cartoon, item, quantity);

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };

};

export default updateShoppingCart;