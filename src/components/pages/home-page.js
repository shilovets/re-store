import React from 'react';
import CartoonList from "../cartoon-list/cartoon-list";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
    return(
        <div>
            <CartoonList />
            <ShoppingCartTable/>
        </div>
    );
};

export default HomePage;