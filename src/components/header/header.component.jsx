import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
/*import { ReactComponent as Logo } from '../../assets/bulogLogo.svg';*/
import img from '../../assets/bulogLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => {
   return (
      <nav className='navbar navbar-expand-lg navbar-light bg-white mb-3'>
         <a href='/' className='navbar-brand mb-3'>
            <img src={img} alt=''></img>
         </a>
         <div className='title mt-2 mr-auto'>
            <span className='title '>
               {' '}
               CeLia's Shoppe
            </span>
         </div>

         <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
         >
            <span className='navbar-toggler-icon'></span>
         </button>

         <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ml-auto mt-3    '>
               <li className='nav-item active'>
                  <Link to='/shop' className='nav-link option'>
                     SHOP
                  </Link>
               </li>
               <li className='nav-item '>
                  <Link to='/contact' className='nav-link option'>
                     CONTACT
                  </Link>
               </li>
               <li className='nav-item '>
                  {currentUser ? (
                     <div
                        className='nav-link option'
                        onClick={() => auth.signOut()}
                     >
                        SIGN OUT
                     </div>
                  ) : (
                     <Link className='nav-link option' to='/signin'>
                        SIGN IN
                     </Link>
                  )}
               </li>
               <li className='nav-item option'>
                  <CartIcon className='option' />
               </li>
            </ul>
                  {hidden ? null : <CartDropdown />}
         </div>
      </nav>
   )
};

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser,
   hidden: state.cart.hidden,
});
export default connect(mapStateToProps)(Header);
