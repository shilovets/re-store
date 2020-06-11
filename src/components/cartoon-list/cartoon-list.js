import React, {Component} from 'react';
import {connect} from "react-redux";

import CartoonListItem from "../cartoon-list-item/cartoon-list-item";
import {withCartoonstoreService} from '../hoc/with-cartoonstore-service';
import {fetchCartoons, cartoonAddedToCart} from '../../actions';

import './cartoon-list.css';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const CartoonList = ({cartoons, onAddedToCart}) => {
    return (
        <ul className='cartoon-list'>
            {
                cartoons.map((cartoon) => {
                    return (
                        <li key={cartoon.id}>
                            <CartoonListItem
                                cartoon={cartoon}
                                onAddedToCart={() => onAddedToCart(cartoon.id)}
                            />
                        </li>
                    );
                })
            }
        </ul>
    )
};

class CartoonListContainer extends Component {
    componentDidMount() {
        this.props.fetchCartoons();
    }

    render() {
        const {cartoons, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <CartoonList cartoons={cartoons} onAddedToCart={onAddedToCart}/>
    };
}

const mapStateToProps = (state) => {
    return {
        cartoons: state.cartoonsList.cartoons,
        loading: state.cartoonsList.loading,
        error: state.cartoonsList.error
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {cartoonstoreService} = ownProps;

    return {
        fetchCartoons: fetchCartoons(cartoonstoreService, dispatch),
        onAddedToCart: (id) => dispatch(cartoonAddedToCart(id))
    };
};

export default withCartoonstoreService()(connect(mapStateToProps, mapDispatchToProps)(CartoonListContainer));