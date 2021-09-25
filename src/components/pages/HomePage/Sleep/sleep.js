import React, {Component} from 'react';
import SleepChairs from '../../../../images/HomePage/sleepChairs.png';
import Bedding from '../../../../images/HomePage/Bedding.png';
import SleepTable from '../../../../images/HomePage/sleepTable.png';
import SleepShoerack from '../../../../images/HomePage/sleepshoreack.png';
import SleepShelves from '../../../../images/HomePage/sleepShelves.png';
import SleepTV from '../../../../images/HomePage/sleepTV.png';
import SleepCoffeeTable from '../../../../images/HomePage/sleepCoffeeTable.png';
import SleepShocker from '../../../../images/HomePage/sleepShocker.png';
import SleepShelf from '../../../../images/HomePage/sleepshelf.png';


class Sleep extends Component{    
  render(){ 
    return(
      <div className="banner-furniture">
        <div className="header-furniture p-0 mt-5 ml-2 mb-2">
          Sleep
        </div>
        <div className="container">
          <div className="row furniture">
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
                <img src= {SleepShoerack} alt="shoreack"/>
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
              <p className="products-newcontent mt-1">New Arrival</p>
            </div>
            <div className="p-0 furniture-imgnew">
              <div className="furniture-image">
                <img src= {SleepShelves} alt="shelves" />
              </div>
              <p className="products mt-2 mb-0">Shelves</p>
            </div>
          </div>
          <div className="row furniture">
            <div className="p-0 furniture-imgcoln">
              <div className="furniture-imagecoln">
                <img src= {SleepTV} alt="tv" />
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
                <img src= {SleepShocker} alt="shocker" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
            </div>
            <div className="p-0 furniture-imgnew">
              <div className="furniture-image">
                <img src= {SleepShelf} alt="sleepshelf" />
              </div>
              <p className="products mt-2 mb-0">Shoerack</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Sleep;