import React, {Component} from 'react';
import './science.scss';
import banner from '../../../images/science.png';
import Header from '../../Header/header';
import image from '../../../images/image 880.png';
import fullwidth from '../../../images/image 881.png';
import Footer from '../../Footer/Footer';
import Author from '../../Author/author';
import Shopnow from '../../Buttons/Shopnow';
class Science extends Component {
render() {
return (
<div>
   <div className="banner-science">
      <Header />
      <div className="container-fluid">
         <div className="row mt-5">
            <div className="col-md-6">
               <img className="img-fluid" src={banner} alt="banner" />
            </div>
            <div className="col-md-6 pt-auto">
               <h1><span className="f-400" >All about</span><br />Science of Sleep</h1>
            </div>
         </div>
      </div>
   </div>
   <div className="mobile-header">
   </div>
   <div className="my-2 container-fluid Breadcrumb">
      <p><b>Wakefit Magazine <i class="fa fa-chevron-right" aria-hidden="true"></i>  Guides <i class="fa fa-chevron-right" aria-hidden="true"></i> </b>  Mattress Size Guide</p>
   </div>
   <div className="container page-align content">
      <div className="ms-auto me-auto  science-content">
         <h2>Science Behind Deep Sleep</h2>
         <p>To measure your bed, first strip it of all the bedding and accessories. You will need a retractable<br /> measuring tape, a irst strip it of all the </p>
         <Author />
         <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? After a lot of research, we at Wakefit<br /> narrowed down our search to two culprits that usually go undetected. Here’s putting an end to<br /> them and bringing you the gift of sleep and waking fit!</p>
      </div>
      <div className="image mx-auto">
         <img className="img-fluid" src={image} alt="blue" />
      </div>
      <h3 className="pb-1 ps-0">Is Your Mattress Affecting Your Sleep?</h3>
      <p className="">To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? </p>
      <h4 className="science-head">Spring Mattress vs Memory foam vs Hard Mattress</h4>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? To awaken the greatness within, you need to<br /> be properly rested. Just as an athlete’s routine prioritizes restoration and recovery, similarly, all<br /> high performing individuals, regardless of what they do, need proper sleep to continue being at<br /> their best.</p>
      <h4 className="science-head">Spring Mattress vs Memory foam vs Hard Mattress</h4>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? To awaken the greatness within, you need to<br /> be properly rested. Just as an athlete’s routine prioritizes restoration and recovery, similarly, all<br /> high performing individuals, regardless of what they do, need proper sleep to continue being at<br /> their best.</p>
      <h3 className="pb-0 ps-0 mental-heading">Mental Health and Sleep: What’s the Link?</h3>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? </p>
      <h4 className="science-head">Spring Mattress vs Memory foam vs Hard Mattress</h4>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? To awaken the greatness within, you need to<br /> be properly rested. Just as an athlete’s routine prioritizes restoration and recovery, similarly, all<br /> high performing individuals, regardless of what they do, need proper sleep to continue being at<br /> their best.</p>
      <h4 className="science-head">Spring Mattress vs Memory foam vs Hard Mattress</h4>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? To awaken the greatness within, you need to<br /> be properly rested. Just as an athlete’s routine prioritizes restoration and recovery, similarly, all<br /> high performing individuals, regardless of what they do, need proper sleep to continue being at<br /> their best.</p>
      <h4 className="science-head">Spring Mattress vs Memory foam vs Hard Mattress</h4>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? To awaken the greatness within, you need to<br /> be properly rested. Just as an athlete’s routine prioritizes restoration and recovery, similarly, all<br /> high performing individuals, regardless of what they do, need proper sleep to continue being at<br /> their best.</p>
   </div>
   <img className ="img-fluid" src={fullwidth} alt="fll-img" />
   <div className="container page-align">
      <h4 className="mental-heading">Is Depression and Anxiety Causing Lack of Sleep?</h4>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? </p>
      <p>To awaken the greatness within, you need to be properly rested. Just as an athlete’s routine<br /> prioritizes restoration and recovery, similarly, all high performing individuals, regardless of what<br /> they do, need proper sleep to continue being at their best. So what exactly comes between you<br /> and the rest that you deserve to fulfill your dreams? To awaken the greatness within, you need to<br /> be properly rested. Just as an athlete’s routine prioritizes restoration and recovery, similarly, all<br /> high performing individuals, regardless of what they do, need proper sleep to continue being at<br /> their best.</p>
      <Shopnow />
   </div>
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
</div>
);
}
}
export default Science;