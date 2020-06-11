const updateCartoonsList = (state, action) => {

    if (state === undefined) {
        return {
            cartoons: [],
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_CARTOONS_REQUEST' :
            return {
                cartoons: [],
                loading: true,
                error: null
            };

        case 'FETCH_CARTOONS_SUCCESS':
            return {
                cartoons: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_CARTOONS_FAILURE' :
            return {
                cartoons: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.cartoonsList;
    }
};

export default updateCartoonsList;