import React from 'react';
import {connect} from "react-redux";

import {
    cartoonAddedToCart,
    cartoonRemovedFromCart,
    allCartoonsRemovedFromCart
} from '../../actions/index';

import './shopping-cart-table.css';

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className='shopping-cart-table'>
            <h2>Your Order</h2>
            <table className='table'>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    items.map((item, idx) => {
                        const {id, title, count, total} = item;
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>${total}</td>
                                <td>
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="btn btn-outline-danger btn-sm float-right">
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                    <button
                                        onClick={() => onIncrease(id)}
                                        className="btn btn-outline-success btn-sm float-right">
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button
                                        onClick={() => onDecrease(id)}
                                        className="btn btn-outline-warning btn-sm float-right">
                                        <i className="fa fa-minus-circle"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div className='total'>
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.shoppingCart.cartItems,
        total: state.shoppingCart.orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: cartoonAddedToCart,
    onDecrease: cartoonRemovedFromCart,
    onDelete: allCartoonsRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);