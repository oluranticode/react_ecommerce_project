import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShopIcon } from '../../assets/cart.svg';
import { createStructuredSelector } from 'reselect';

import './cart-icon.style.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
        <ShopIcon className="shopping-icon"/>
        <span className='item-count'>{itemCount}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount   
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

//import { ReactComponent as ShopIcon } from '../../assets/cart.svg';