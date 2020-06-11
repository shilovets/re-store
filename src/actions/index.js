const cartoonsLoaded = (newCartoons) => {
    return {
        type: 'FETCH_CARTOONS_SUCCESS',
        payload: newCartoons
    };
};

const cartoonsRequested = () => {
    return {
        type: 'FETCH_CARTOONS_REQUEST'
    };
};

const cartoonsError = (error) => {
    return {
        type: 'FETCH_CARTOONS_FAILURE',
        payload: error
    };
};

const fetchCartoons = (cartoonstoreService, dispatch) => () => {
    dispatch(cartoonsRequested());
    cartoonstoreService.getCartoons()
        .then((data) => dispatch(cartoonsLoaded(data)))
        .catch((error) => dispatch(cartoonsError(error)));
};

const cartoonAddedToCart = (cartoonId) => {
    return {
        type: 'CARTOON_ADDED_TO_CART',
        payload: cartoonId
    };
};

const cartoonRemovedFromCart = (cartoonId) => {
    return {
        type: 'CARTOON_REMOVED_FROM_CART',
        payload: cartoonId
    };
};

const allCartoonsRemovedFromCart = (cartoonId) => {
    return {
        type: 'ALL_CARTOONS_REMOVED_FROM_CART',
        payload: cartoonId
    };
};

export {
    fetchCartoons,
    cartoonAddedToCart,
    cartoonRemovedFromCart,
    allCartoonsRemovedFromCart
};