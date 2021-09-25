
import React, {Component} from 'react';
import './offers.scss';
import Slider from "react-slick";
import SunnyHome from '../../../../images/HomePage/offersSunnyHome.png';
import OffersImg from '../../../../images/HomePage/offers.png'
import Icon from '../../../../images/HomePage/Icon.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="offers-blur">     
      <img src= {Icon} alt="vector"
        className={className}
        style={{ ...style, display: "block", background: "transparent",}}
        onClick={onClick}
      />
    </div>
  );
}

class Offers extends Component{ 
  render(){
    const settings = {
      className: "slider variable-width",
      dots: false,
      infinite: false,
      centerMode: false,
      centerPadding: "60px",
      slidesToShow: 2,
      // slidesToScroll: 2,
      swipeToSlide: true,
      variableWidth: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
      nextArrow: <SampleNextArrow />,
    };

   return(
    <div className="banner-offers">
      <div className="display">
        <div className="header-offers p-0 mt-5 ml-2 mb-2 ">
          Offers
        </div>
        <div className="header-views p-0 mt-5 ml-2 mb-2">
          View All
        </div>
      </div>   
      <Slider {...settings}>
        <div style={{ maxWidth: 100 }}>
         <img src= {SunnyHome} alt="chair" className="p-0 mt-4" />
        </div>
        <div style={{ maxWidth: 100 }}>
          <img src= {OffersImg} alt="chair" className="p-3 mt-1 ps-4" />
        </div>
           
          <div style={{ maxWidth: 85 }}>
            <img src= {SunnyHome} alt="chair" className="p-2 mt-3"/>
          </div>
       
      </Slider>
    </div>
    ); 
  }
}
export default Offers;