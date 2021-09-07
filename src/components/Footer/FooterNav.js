import React,{Component} from 'react';
import './FooterNav.scss';
import logo from '../../images/wakefit logo 2 1.png';
import facebook from '../../images/Facebook.png';
import instagram from '../../images/Instagram.png';
import twitter from '../../images/Twitter.png';
import linkedin from '../../images/image 416.png';





class Mainlinks extends Component {
render() {
return (
<div className="mainlink">
   <div className="container">
      <div className="row nav-row" id="collapseSummary">
         <div className="col-md-3">
            <img className="footer-logo" src={logo} alt="logo" />
            <ul className="list-unstyled menus">
               <li>
                  <a href="#!" className="text-white">Careers</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Investor relation</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Business orders</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Media queries</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Media coverage</a>
               </li>
               <li class="icons">
               {/* <i class="fab fa-instagram"></i><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i><i class="fab fa-linkedin-in"></i> */}
               <img src={facebook} alt="fb" /><img src={facebook} alt="fb" /><img src={instagram} alt="fb" /><img src={linkedin} alt="fb" />

               </li>
               <li>
             

               </li>

            </ul>
         </div>
         <div className="col-md-3 check" id="collapse1">

            <ul className="list-unstyled sec-menu">
               <li>
                  <a href="#!" className="text-white">Campaigns</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Work from Home Quiz</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Sleep survey</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Sleep Internship</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Dream home survey</a>
               </li>
               <hr className="dash" />
               <li>
                  <a href="#!" className="text-white">All products</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Offers</a>
               </li>
            </ul>
         </div>
         <div className="col-md-3 check">
            <ul className="list-unstyled sec-menu">
               <li>
                  <a href="#!" className="text-white">Policies</a>
               </li>
               <li>
                  <a href="#!" className="text-white">FAQs</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Shipping & Location</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Payment, Returns & Refunds</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Warranty</a>
               </li>
               <hr className="dash" />
               <li>
                  <a href="#!" className="text-white">Terms of Service</a>
               </li>
               <li>
                  <a href="#!" className="text-white">Privacy Policy</a>
               </li>
            </ul>
         </div>
         <div className="col-md-3 check">
            <ul className="list-unstyled sec-menu ">
               <li>
                  <a href="#!" className="text-white">Help</a>
               </li>
            </ul>
            <p className="text-white">
              <p className="mb-0 f-400 contact-info">Contact us at +91 9883333123</p>
              <p className="contact-info text-white-50 mb-4"> We are here to help you every day <br />
               between 9:30 AM to 7:30 PM </p>
            </p>
            <div className="office-info ">
            <p className="f-400 mb-0 text-white"> Registered Office, Manufacturer & Packer<br /></p>
             <p className="f-300 mb-0 text-white-50">Wakefit Innovations Pvt. Ltd.<br />
               Address: Plot No. 277, In sub layout of<br />
               Kachakanahalli,Bommasandra,1st Phase of<br />
               Jigani, Anekal Taluk Bangalore, Bangalore -<br />
               560099, Karnataka, India<br /></p>
              <p className="f-400 mb-0 text-white"> Corporate Identity Number:</p>
               <p className="f-300 mb-0 text-white-50">U52590KA2016PTC086582</p>
               <p className="f-400 mb-0 text-white">For any queries or grievances, contact<br /></p>
             <p className="f-300 mb-0 text-white-50"> Mr Abhishek Upadhyay at compliance@wakefit.co</p>
            </div>
         </div>
      </div>
   </div>
</div>
);
}
}

export default Mainlinks;