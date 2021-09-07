import React, {Component} from 'react';
import './mobilenav.scss';
import home from'../..//images/Ellipse 4.png';
import search from'../../images/Vector (4).png';
import cart from'../../images/Vector (3).png';
class Mobilenavigation extends Component {
render() {
return(
<nav className="nav">
   <a href="#!" className="nav__link nav__link--active">
   <img src={home} alt="home" />
   <span className="nav__text">Home</span>
   </a>
   <a href="#!" className="nav__link ">
   <img className="pb-2" src={search} alt="search" />
   <span className="nav__text">Search</span>
   </a>
   <a href="#!" className="nav__link">
   <img  className="pb-2" src={cart} alt="cart" />
   <span className="nav__text">Cart</span>
   </a>
   <a href="#!" className="nav__link">
   <i className="material-icons nav__icon"></i>
   <span className="nav__text pt-3">Account</span>
   </a>
</nav>
);
}
}
export default Mobilenavigation;