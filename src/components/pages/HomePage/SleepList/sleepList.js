import React, {Component} from 'react';
import SleepChairs from '../../../../images/HomePage/sleepChairs.png';
import Bedding from '../../../../images/HomePage/Bedding.png';
import SleepTable from '../../../../images/HomePage/sleepTable.png';
import SleepShoerack from '../../../../images/HomePage/sleepshoreack.png';
import SleepTV from '../../../../images/HomePage/sleepTV.png';
import SleepCoffeeTable from '../../../../images/HomePage/sleepCoffeeTable.png';
import SleepShocker from '../../../../images/HomePage/sleepShocker.png';

class SleepList extends Component{
    render(){
      return(
        <div className="banner-furnitureList">
          <div className="header-furnitureList p-3 mt-1">
          <div className="container mt-2">
          <div className="row furnitureList">
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {SleepChairs} alt="chair" />
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
                <img src= {SleepTable} alt="table" />
              </div>
              <p className="products mt-2 mb-0">Side Table</p>
            </div>
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {SleepShoerack} alt="shoreack" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
              <p className="products-newcontent mt-1">New Arrival</p>
            </div>
            <div className="p-0 furniture-imgnew">
              <div className="furniture-image">
                <img src= {SleepTV} alt="tv" />
              </div>
              <p className="products mt-2 mb-0">Shelves</p>
            </div>
          </div>
          <div className="row furnitureList">
            <div className="p-0 furniture-imgcoln">
              <div className="furniture-imagecoln">
                <img src= {SleepShocker} alt="shocker"  />
              </div>
              <p className="products mt-2 mb-0">TV unit</p>
              <p className="products-content mt-1">14+ Varieties</p>
            </div>
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {SleepCoffeeTable} alt="coffeeTable" />
              </div>
              <p className="products mt-2 mb-0">Coffee Table</p>
            </div>
            <div className="p-0 furniture-img">
              <div className="furniture-image">
                <img src= {Bedding} alt="bedding" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
            </div>
            <div className="p-0 furniture-imgnew">
              <div className="furniture-image">
                <img src= {SleepTable} alt="table" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
            </div>
          </div>
          <div className="row furnitureList">
            <div className="p-0 mb-3 furniture-imglast-row">
              <div className="furniture-imagelast-row">
                <img src= {Bedding} alt="bedding" />
              </div>
            </div>
            <div className="p-0 furniture-imglast-row">
              <div className="furniture-imagelast-row">
                <img src= {SleepTable} alt="table" />
              </div>
            </div>
            <div className="p-0 furniture-imglast-row">
              <div className="furniture-imagelast-row">
                <img src= {SleepCoffeeTable} alt="coffeeTable" />
              </div>
            </div>
            <div className="p-0 furniture-imgcolnlast-row">
              <div className="furniture-imagecolnlast-row">
                <img src= {SleepShocker} alt="shocker" />
              </div>
            </div>
          </div>
        </div>
       </div>
       </div>
      );
    }
  
  }
  export default SleepList;