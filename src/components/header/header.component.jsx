import React from 'react';
import './header.component.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/bulogLogo.svg';

const Header = () => {
   return (
      <div className='header'>
         <Link to='/' classname='logo-container'>
            <Logo className='logo' />
         </Link>

         <div class='options'>
            <Link to='/shop' class='option'>
               SHOP
            </Link>
            <Link to='/contact' class='option'>
               CONTACT
            </Link>
         </div>
      </div>
   );
};

export default Header;
