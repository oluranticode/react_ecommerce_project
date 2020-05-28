import React from 'react';
import { connect } from 'react-redux';
import './header.style.scss';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
//import { ReactComponent as Logo } from '../../assets/crown.svg';
import {auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
//<Logo className="logo" />
const Header = ({ currentUser, hidden }) =>(
    <div className="header">
    <Link className="logo-container" to="/">
    <h1 style={{fontSize: "50px"}} className="logo" >&#128514;</h1>
    </Link>

    <div className ="options">
    <Link className="option" to="/shop">
    Shop
    </Link>

    <Link className="option" to="/shop">
    Contact
    </Link>

    {
        currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
            </div>

        ) :(
            <Link className="option" to="/signin">
            SIGN IN/UP
            </Link>
        )
    }
    <CartIcon />
                 </div>
                 {
                     hidden ? null : <CartDropdown />
                 }
                 
            </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
