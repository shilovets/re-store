import updateCartoonsList from "./cartoon-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
        return {
            cartoonsList: updateCartoonsList(state, action),
            shoppingCart: updateShoppingCart(state, action)
        }
    }
;

export default reducer;