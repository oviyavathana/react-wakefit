import React, {Component} from 'react';
import './furniture.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Chair from '../../../../images/HomePage/Chair.png';
import Bedding from '../../../../images/HomePage/Bedding.png';
import Table from '../../../../images/HomePage/table.png';
import Shoerack from '../../../../images/HomePage/shoreack.png';
import Shelves from '../../../../images/HomePage/shelves.png';
import TV from '../../../../images/HomePage/TV.png';
import coffeeTable from '../../../../images/HomePage/coffeeTable.png';
import Shelf from '../../../../images/HomePage/shelf.png';
import Shocker from '../../../../images/HomePage/shocker.png';
import Navbar from '../../../pages/HomePage/Navbar/navbar.js'

class Furniture extends Component{ 
  render(){
    return(
      <Carousel showStatus="">
        <div className="carousel">
          <div className="banner-furniture">
            <div className="header-furniture p-0 mt-5 ml-2 mb-2">
              Furniture
            </div>
            <div className="container">
              <div className="row furniture">
                <div className="p-0 furniture-img">
                  <div className="furniture-image">
                    <img src= {Chair} alt="chair" />
                  </div>
                  <p className="products mt-2 mb-0">Chairs</p>
                  <p className="products-content mt-1">14+ Varieties</p>
                </div>
                <div className="p-0 furniture-img">
                  <div className="furniture-image">
                    <img src= {Bedding} alt="bedding" />
                  </div>
                  <p className="products mt-2 mb-0">Bedding</p>
                </div>
                <div className="p-0 furniture-img">
                  <div className="furniture-image">
                    <img src= {Table} alt="table" />
                  </div>
                  <p className="products mt-2 mb-0">Side Table</p>
                </div>
                <div className="p-0 furniture-img">
                  <div className="furniture-image">
                    <img src= {Shoerack} alt="shoreack"/>
                  </div>
                  <p className="products mt-2 mb-0">Shoerack</p>
                  <p className="products-newcontent mt-1">New Arrival</p>
                </div>
                <div className="p-0 furniture-imgnew">
                  <div className="furniture-image">
                    <img src= {Shelves} alt="shelves" />
                  </div>
                  <p className="products mt-2 mb-0">Shelves</p>
                </div>
              </div>
              <div className="row furniture">
                <div className="p-0 furniture-imgcoln">
                  <div className="furniture-imagecoln">
                    <img src= {TV} alt="tv" />
                  </div>
                  <p className="products mt-2 mb-0">TV unit</p>
                  <p className="products-content mt-1">14+ Varieties</p>
                </div>
                <div className="p-0 furniture-img">
                  <div className="furniture-image">
                    <img src= {coffeeTable} alt="coffeeTable" />
                  </div>
                  <p className="products mt-2 mb-0">Coffee Table</p>
                </div>
                <div className="p-0 furniture-img">
                  <div className="furniture-image">
                    <img src= {Shelf} alt="shelf" />
                  </div>
                  <p className="products mt-2 mb-0">Shoerack</p>
                </div>
                <div className="p-0 furniture-imgnew">
                  <div className="furniture-image">
                    <img src= {Shocker} alt="shocker" />
                  </div>
                  <p className="products mt-2 mb-0">Shoerack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="carousel">
        <Navbar />
      </div>     
    </Carousel>
    );
  }
}
export default Furniture;