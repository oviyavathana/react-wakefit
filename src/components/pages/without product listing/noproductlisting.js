import React, {Component} from 'react';
import './productlisting.scss';
import moblogo from '../../../images/wakefit logo.png';
import Header from '../../Header/header';
import banner from '../../../images/Rectangle1407.png';
import bed1 from '../../../images/bed1.png';
import bed2 from '../../../images/bed2.png';
import Footer from '../../Footer/Footer';
import Mobilenavigation from '../../Header/mobilenav';
import Author from'../../Author/author';
import quote from '../../../images/quotes.png';
import Shopnow from '../../Buttons/Shopnow';
class products extends Component {
render() {
return (
<div>
   <div className="banner">
      <Header />
      <div className="container-fluid page-width">
         <div className="row mt-5">
            <div className="col-md-6">
               <img className="img-fluid" src={banner} alt="banner" />
            </div>
            <div className="col-md-6">
               <h1><span className="f-400" >Beds</span><br /> & Size Guide</h1>
            </div>
         </div>
      </div>
   </div>
   <div className="mobile-banner">
      <div className="pos-element">
         <img src={moblogo} alt="moblogo" />
         <h3>Bed size guides </h3>
      </div>
   </div>
   <div className="my-2 container-fluid Breadcrumb">
      <p><b>Wakefit Magazine <i class="fa fa-chevron-right" aria-hidden="true"></i>
         Guides  <i class="fa fa-chevron-right" aria-hidden="true"></i>
         </b>  Mattress Size Guide
      </p>
   </div>
   <div className="container content">
      <h2>Everything you need to know before picking<br />
         a bed size
      </h2>
      <Author />
   </div>
   <div className="container content">
      <p>Scratching your head over which bed size to buy? <br /></p>
      <p>We understand that your dilemma, so we have provided a simple bed guide to help you make the<br /> right decision. But before we get into that, let us help you with measuring your bed.</p>
      <br />
      <p >To measure your bed, first strip it of all the bedding and accessories. You will need a retractable<br /> measuring tape, a notebook, and a pen. Begin by placing one end of the tape on the left corner<br /> of the bed and lock it. Now pull the tape until you are at the right corner. Note down the<br /> measurement. This is the width of your bed.</p>
      <br />
      <p>For the length, start by placing the tape at the middle top of your bed, and lock it. Now extend the<br /> tape until you are at the bottom of the bed. This is the length of your bed. Ensure that the<br /> measurements are of the bed cavity and not end-to-end, so that your mattress will fit snugly on<br /> your bed. With the length and the width measurements, you can easily choose the right bed for<br /> your space.</p>
      <br />
      <p>To measure your bed, first strip it of all the bedding and accessories. You will need a retractable<br /> measuring tape, a notebook, and a pen. Begin by placing one end of the tape on the left corner<br /> of the bed and lock it. Now pull the tape until you are at the right corner. Note down the<br /> measurement. This is the width of your bed.</p>
      <br />
      <img src={quote} alt="quote" />
      <p className="quotes"> 
         We understand that your dilemma, so we have provided a simple bed guide to help you make the right<br /> decision. But before we get into that, let us help you with measuring your bed
      </p>
      <h3 className="ps-0 heading-space">Here are some of the standard bed sizes available in<br /> the market</h3>
      <div className="row mt-5 mx-auto two-col">
         <div className="col-md-6">
            <h6>King size bed</h6>
            <p>A king-size bed is usually 72 inches(1.8 m)<br /> wide and 72 to 78 inches (1.83m to 1.98m)<br /> long. These are just basic measurements,<br /> but the sizes could also vary depending on<br /> the seller. This size is a good fit for two<br /> adults who prefer to have plenty of</p>
         </div>
         <div className="col-md-6">
            <h6>Queen size bed </h6>
            <p>A queen size bed’s dimensions are 60 or<br /> 66 inches(1.52m or 1.68 m) wide and 72 to<br /> 75 inches(1.83m to 1.91m) long. This size <br />is narrower than a king-size bed and will<br /> make a cozy fit for two adults along with a <br />small child. Basic measurements can be.</p>
         </div>
         <div className="col-md-6 width-40 mt-4">
            <h6>Full size bed or Double bed</h6>
            <p>A king-size bed is usually 72 inches(1.8 m)M<br /> wide and 72 to 78 inches (1.83m to 1.98m)<br />  long. These are just basic measurements,<br />  but the sizes could also vary depending on<br />  the seller. This size is a good fit for <br />two adults who prefer to  have plenty of</p>
         </div>
         <div className="col-md-6 mt-4">
            <h6>Single bed</h6>
            <p>A queen size bed’s dimensions are 60 or<br /> 66 inches(1.52m or 1.68 m) wide and 72 to<br /> 75 inches(1.83m to 1.91m) long. This size <br />is narrower than a king-size bed and will<br /> make a cozy fit for two adults along with a <br />small child. Basic measurements can be.</p>
         </div>
      </div>
      <p className="mt-5">To measure your bed, first strip it of all the bedding and accessories. You will need a retractable<br /> measuring tape, a notebook, and a pen. Begin by placing one end of the tape on the left corner of<br /> the bed and lock it. Now pull the tape until you are at the right corner. Note down the<br /> measurement. This is the width of your bed. Now that you know the specifics of the beds, you can<br /> choose one based on room size, price and other factors. Those unhappy with the usual sizes can<br /> opt for a custom bed. Wakefit is the place to go if you are looking to buy a wooden king size bed or queen size bed<br /> online, they also offer a wide range of mattresses.</p>
      <p className="mt-5">To measure your bed, first strip it of all the bedding and accessories. You will need a retractable<br /> measuring tape, a notebook, and a pen. Begin by placing one end of the tape on the left corner of<br /> the bed and lock it. Now pull the tape until you are at the right corner. Note down the<br /> measurement. This is the width of your bed. Now that you know the specifics of the beds, you can<br /> choose one based on room size, price and other factors. Those unhappy with the usual sizes can<br /> opt for a custom bed. Wakefit is the place to go if you are looking to buy a wooden king size bed or queen size bed<br /> online, they also offer a wide range of mattresses.</p>
      <div className="row my-5">
         <div className="col-md-6 ms-auto">
            <img src={bed1} alt="bed" />
         </div>
         <div className="col-md-6">
            <img src={bed2} alt ="bed1" />
         </div>
      </div>
   </div>
   <Shopnow />
   <div className="container">
      <hr className="hr-line" />
   </div>
   <h4 className="text-center">Buying Furniture & Mattress Online, Made simple!</h4>
   <p className="text-center">Your search for great furniture, mattress  & other home products ends here!</p>
   <div className="container mb-5">
      <div className="row">
         <div className="col-md-4">
            <p>Welcome to the world of Wakefit. We create innovative sleep products that help you get a good night’s sleep, every night. We believe that a mind that sleeps right, thinks right. Our Orthopedic Memory Foam Mattress will lull you into a deep sleep night after night and our Dual Comfort Mattress will lend you the qualities of a hard and a soft mattress, without having to buy two different mattresses.</p>
         </div>
         <div className="col-md-4">
            <p>Our sleeping pillows will support your head just right, our back support cushion will ease your back pain and our sheesham wood beds will prove to be sturdy companions, come rain or shine. Our mattress protectors are a must, if spilling disasters are commonplace at your home, which are usually the case with kids and pets around. Our fitted bed sheets are super soft and super easy to fit on your bed for that wrinkle-free snug mattress.</p>
         </div>
         <div className="col-md-4">
            <p>All our products are available online and you’ll find that it’s easy to buy memory foam mattresses online. Our size guides will help you decide whether to go in for a queen size mattress or a king size mattress, ensuring you end up with the best mattress for your bed.</p>
            <p>So go ahead, take the plunge! You really can’t go wrong, the Wakefit memory foam mattress comes with a 100 night risk free trial.</p>
         </div>
      </div>
   </div>
   <Footer />
   <Mobilenavigation />
</div>
);
}
}
export default products;