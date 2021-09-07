import React, {Component} from 'react';
import logo from '../../images/wakefit logo 2 1.svg';
import './header.scss';
import Searchbar from '../Header/searchbar';
import user from '../../images/Icon (1).png';
import cart from '../../images/Icon (2).png';
import arrowdown from '../../images/Vector (2).png'
class Header extends Component {
render() {
return (
<nav className ="navbar">
   <div className ="container-fluid">
      <div className ="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
         <div className ="animated-icon3"><span></span><span></span><span></span></div>
      </div>
      <a className ="navbar-brand" href="#home">
      <img src={logo} alt="logo" />
      </a>
      <Searchbar />
      <ul className ="nav ms-auto navbar-right">
         <li><a href="#format" className ="me-4">Experience centers</a></li>
         <li className ="nav-item dropdown">
            <a className ="nav-bar me-3" href="#More" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More <img src={arrowdown} alt="arrow" />
            </a>
            <ul className ="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
               <li><a className ="dropdown-item" href="#Menu">All Offers</a></li>
               <li><a className ="dropdown-item" href="#Menu">Ghar Magazine</a></li>
               <li><a className ="dropdown-item" href="#Menu">Bulk orders</a></li>
               <li><a className ="dropdown-item" href="#Menu">Gift cards</a></li>
               <li><a className ="dropdown-item" href="#Menu">Press</a></li>
               <li><a className ="dropdown-item" href="#Menu">Awards</a></li>
               <li><a className ="dropdown-item" href="#Menu">Careers</a></li>
               <li><a className ="dropdown-item border-bottom-0" href="#Menu">Investor relations</a></li>
            </ul>
         </li>
         <span className ="vertical-line pt-2"></span>
         <li><a href="#navbar" className ="me-4">560095, Bengaluru</a></li>
         <li className ="nav-item dropdown">
            <a className ="nav-bar me-3" href="#More" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Orders
            </a>
            <ul className ="dropdown-menu alignment" aria-labelledby="navbarDropdownMenuLink">
               <li><a className ="dropdown-item" href="#Menu">Track Orders</a></li>
               <li><a className ="dropdown-item border-bottom-0" href="#Menu">Manage all orders</a></li>
            </ul>
         </li>
         <li className ="nav-item dropdown">
            <a className ="nav-bar me-3" href="#More" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user} alt="user" />
            </a>
            <ul className ="dropdown-menu alignments" aria-labelledby="navbarDropdownMenuLink">
               <li>
                  <a className ="dropdown-item" href="#Menu">
                     <button className="signin">Sign in</button><br />
                     <p className="my-1 f-12 text-center">Single step sign up</p>
                  </a>
               </li>
               <li><a className ="dropdown-item" href="#Menu">My account</a></li>
               <li><a className ="dropdown-item" href="#Menu">My wishlist</a></li>
               <li><a className ="dropdown-item" href="#Menu">Help center</a></li>
               <li><a className ="dropdown-item" href="#Menu">Wakefit Rewards</a></li>
               <li><a className ="dropdown-item border-bottom-0" href="#Menu">Wakefit Referral</a></li>
            </ul>
         </li>
         <li><a href="#navbar" className ="me-4"></a></li>
         <li><a href="#navbar" className ="me-4"><img src={cart} alt="cart" /></a></li>
      </ul>
      {/* <div className ="collapse navbar-collapse" id="navbarTogglerDemo02">
         <ul className ="navbar-nav mb-2 mb-lg-0">
            <li className ="nav-item">
               <a className ="nav-link active" aria-current="page" href="#Menu1">Menu 1</a>
            </li>
            <li className ="nav-item">
               <a className ="nav-link" href="#Menu2">Menu 2</a>
            </li>
         </ul>
      </div> */}
   </div>
</nav>
);
}
}
export default Header;