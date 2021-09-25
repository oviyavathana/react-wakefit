import React, {Component} from 'react';
import './carousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class HomeCarousel extends Component{
  render(){
    return(
       <div className="banner-carousel">
         <div className="header-text p-4">
            IN SPOTLIGHT
         </div>
         <Carousel autoPlay showStatus="">
            <div className="carousel-image">
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div> 
            <div className="carousel-image">
              <img src="https://picsum.photos/200/300?grayscale" />
            </div>
            <div className="carousel-image">
              <img src="https://picsum.photos/200/300/?blur" />
            </div>
            <div className="carousel-image">
              <img src="https://picsum.photos/200/300?grayscale" />
            </div>
            <div className="carousel-image">
              <img src="https://picsum.photos/seed/picsum/200/300" />
            </div>
            <div className="carousel-image">
              <img src="https://picsum.photos/200/300/?blur" />
            </div>
         </Carousel>
         <div className="footer-text">
            Sheesham Solid Wood Beds
            <p className="footer-content mb-0 p-2">Sheesham wood bed range, designed for long life and <br/>royal look</p>
         </div>
        </div> 
    );
  }
}
export default HomeCarousel;