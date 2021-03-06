import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/bulogLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../card-dropdown/card-dropdown.component';

const Header = ({ currentUser, hidden }) => {
   return (
      <div className='header'>
         <Link to='/' className='logo-container'>
            <Logo className='logo' />
         </Link>
         <div className='title'>Celia's Shoppe</div>

         <div className='options'>
            <Link to='/shop' className='option'>
               SHOP
            </Link>
            <Link to='/contact' className='option'>
               CONTACT
            </Link>
            {currentUser ? (
               <div className='option' onClick={() => auth.signOut()}>
                  SIGN OUT
               </div>
            ) : (
               <Link className='option' to='/signin'>
                  SIGN IN
               </Link>
            )}
            <CartIcon />
         </div>
         {
            hidden ? null :<CartDropdown /> 
         }
         
      </div>
   );
};

const mapStateToProps = state => ({
   currentUser: state.user.currentUser,
   hidden: state.cart.hidden
});
export default connect(mapStateToProps)(Header);
