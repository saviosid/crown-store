import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/bulogLogo.svg';
import img from '../../assets/bulogLogo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../card-dropdown/card-dropdown.component';

const Header = ({ currentUser, hidden }) => {
   return (
      <nav className='navbar navbar-expand-lg navbar-light '>
         <a href='/' className='navbar-brand mr-auto'>
            <img src={img} alt='No Image'></img>
            <span className='title ' text>
               {' '}
               CeLia's Shoppe
            </span>
         </a>

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
            <ul class='navbar-nav ml-auto'>
               <li class='nav-item active'>
                  <Link to='/shop' className='nav-link option'>
                     SHOP
                  </Link>
               </li>
               <li class='nav-item '>
                  <Link to='/contact' className='nav-link option'>
                     CONTACT
                  </Link>
               </li>
               <li class='nav-item '>
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
               <li nav-item option>
                  <CartIcon class='nav-link option' />
               </li>
            </ul>
            {hidden ? null : <CartDropdown />}
         </div>
      </nav>
   );
};

const mapStateToProps = (state) => ({
   currentUser: state.user.currentUser,
   hidden: state.cart.hidden,
});
export default connect(mapStateToProps)(Header);
