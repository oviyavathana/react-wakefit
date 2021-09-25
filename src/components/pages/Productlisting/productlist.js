import React, {Component} from 'react';
import './productlist.scss';
import image1 from '../../../images/image195.png';
import image2 from '../../../images/img1.png';
import image3 from '../../../images/img2.png';
import image4 from '../../../images/img3.png';
import star from '../../../images/Vector.png';
import Seemore from'../Productlisting/button';
class Productlist extends Component {
render() {
return (  
<div className="product-list">
   <div className="container">
      <div className="row">
         <h4>Check out our bestsellers in beds</h4>
         <div className="col-md-3">
            <img src={image1} alt="imagebed" />
            <p className="rating  mt-3 ">4.3  <img src={star} alt="star"/><span className="number ms-2">14,320</span></p>
            <p className="rating">Phoenix Wall Shelf</p>
            <p className="amount">₹12,956</p>
            <p><span className="offer">Upto 37% OFF </span>on MRP ₹5211</p>
         </div>
         <div className="col-md-3">
            <img src={image2}  alt="bed-2" />
            <p className=" mt-3 rating">4.3  <img src={star} alt="star"/><span className="number ms-2">14,320</span></p>
            <p className="rating">Phoenix Wall Shelf</p>
            <p className="amount">₹12,956</p>
            <p><span className="offer">Upto 37% OFF </span>on MRP ₹5211</p>
         </div>
         <div className="col-md-3">
            <img src={image3} alt="bed3" />
            <p className=" mt-3 rating">4.3  <img src={star} alt="star"/><span className="number ms-2">14,320</span></p>
            <p className="rating">Phoenix Wall Shelf</p>
            <p className="amount">₹12,956</p>
            <p><span className="offer">Upto 37% OFF </span>on MRP ₹5211</p>
         </div>
         <div className="col-md-3">
            <img src={image4}  alt="bed2" />
            <p className=" mt-3  rating">4.3  <img src={star} alt="star"/><span className="number ms-2">14,320</span></p>
            <p className="rating">Phoenix Wall Shelf</p>
            <p className="amount">₹12,956</p>
            <p><span className="offer">Upto 37% OFF </span>on MRP ₹5211</p>
         </div>
      </div>
      <Seemore />
   </div>
</div>
);
}
}
export default Productlist;