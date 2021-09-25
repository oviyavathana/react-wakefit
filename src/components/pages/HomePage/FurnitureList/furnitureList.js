import React, {Component} from 'react';
import './furnitureList.scss';
import Chair from '../../../../images/HomePage/Chair.png';
import Bedding from '../../../../images/HomePage/Bedding.png';
import Table from '../../../../images/HomePage/table.png';
import Shoerack from '../../../../images/HomePage/shoreack.png';
import Shelveslist from '../../../../images/HomePage/shelveslist.png';
import TV from '../../../../images/HomePage/TV.png';
import coffeeTable from '../../../../images/HomePage/coffeeTable.png';
import Shelf from '../../../../images/HomePage/shelf.png';
import Sofa from '../../../../images/HomePage/sofa.png';

class FurnitureList extends Component{
   render(){
    return(
       <div className="banner-furnitureList">
          <div className="header-furnitureList p-3 mt-1">
          <div className="container mt-2">
          <div className="row furnitureList">
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {Chair} alt="chair"/>
              </div>
              <p className="products mt-2 mb-0">Chairs</p>
              <p className="products-content mt-1">14+ Varieties</p>
            </div>
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {Bedding} alt="bedding"/>
              </div>
              <p className="products mt-2 mb-0">Bedding</p>
            </div>
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {Table} alt="table"/>
              </div>
              <p className="products mt-2 mb-0">Side Table</p>
            </div>
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {Shoerack} alt="shoreack" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
              <p className="products-newcontent mt-1">New Arrival</p>
            </div>
            <div className="p-0 furniturelist-imgnew">
              <div className="furniture-image">
                <img src= {Shelveslist} alt="shelveslist" />
              </div>
              <p className="products mt-2 mb-0">Shelves</p>
            </div>
          </div>
          <div className="row furnitureList">
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
                <img src= {Sofa} alt="sofa" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
            </div>
          </div>
          <div className="row furnitureList">
            <div className="p-0 mb-3 furniture-imglast-row">
              <div className="furniture-imagelast-row">
                <img src= {Shelf} alt="shelf" />
              </div>
            </div>
            <div className="p-0 furniture-imglast-row">
              <div className="furniture-imagelast-row">
                <img src= {Sofa} alt="sofa" />
              </div>
            </div>
            <div className="p-0 furniture-imglast-row">
              <div className="furniture-imagelast-row">
                <img src= {coffeeTable} alt="coffeeTable" />
              </div>
            </div>
            <div className="p-0 furniture-imgcolnlast-row">
              <div className="furniture-imagecolnlast-row">
                <img src= {TV} alt="tv" />
              </div>
            </div>
          </div> 
        </div>
       </div>
       </div>
    );
   }
}
export default FurnitureList;