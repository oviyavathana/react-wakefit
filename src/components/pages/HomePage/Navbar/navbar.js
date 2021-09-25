import React, {Component} from 'react';
import './navbar.scss'
// import '../../../pages/HomePage/FurnitureList/furnitureList.js'
import FurnitureList from '../../../pages/HomePage/FurnitureList/furnitureList.js';
import SleepList from '../../../pages/HomePage/SleepList/sleepList';
import LighteningList  from '../../../pages/HomePage/LighteningList/lighteningList';
import DecorList  from '../../../pages/HomePage/DecorList/decorList.js';
import ShopByRoomsList  from '../../../pages/HomePage/ShopByRoomsList/shopByRoomsList';
import KitchenwareList  from '../../../pages/HomePage/KitchenwareList/kitchenwareList';
import KidsList  from '../../../pages/HomePage/KidsList/kidsList';

class Navbar extends Component{
   render(){
    return(
    <div className="banner-furnitureList">
      <div className="header-furnitureList p-3 mt-4 ml-2 mb-1">
        <ul class="nav nav-tabs display" id="myTab" role="tablist">
            <li class="nav-item" role="presentation" >
                <button class="nav-link active" id="furniture-tab" data-bs-toggle="tab" data-bs-target="#furniture" type="button" role="tab" aria-controls="furniture" aria-selected="true">Furniture</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="sleep-tab" data-bs-toggle="tab" data-bs-target="#sleep" type="button" role="tab" aria-controls="sleep" aria-selected="false">Sleep</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="lighting-tab" data-bs-toggle="tab" data-bs-target="#lighting" type="button" role="tab" aria-controls="lighting" aria-selected="false">Lighting</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="decor-tab" data-bs-toggle="tab" data-bs-target="#decor" type="button" role="tab" aria-controls="decor" aria-selected="false">Decor</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="shopByRooms-tab" data-bs-toggle="tab" data-bs-target="#shopByRooms" type="button" role="tab" aria-controls="shopByRooms" aria-selected="false">Shop by Rooms</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="kitchenware-tab" data-bs-toggle="tab" data-bs-target="#kitchenware" type="button" role="tab" aria-controls="kitchenware" aria-selected="false">Kitchenware</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="kids-tab" data-bs-toggle="tab" data-bs-target="#kids" type="button" role="tab" aria-controls="kids" aria-selected="false">Kids</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="furniture" role="tabpanel" aria-labelledby="furniture-tab"><FurnitureList /></div>
            <div class="tab-pane fade" id="sleep" role="tabpanel" aria-labelledby="sleep-tab"><SleepList /></div>
            <div class="tab-pane fade" id="lighting" role="tabpanel" aria-labelledby="lighting-tab"><LighteningList /></div>
            <div class="tab-pane fade" id="decor" role="tabpanel" aria-labelledby="decor-tab"><DecorList /></div>
            <div class="tab-pane fade" id="shopByRooms" role="tabpanel" aria-labelledby="shopByRooms-tab"><ShopByRoomsList /></div>
            <div class="tab-pane fade" id="kitchenware" role="tabpanel" aria-labelledby="kitchenware-tab"><KitchenwareList /></div>
            <div class="tab-pane fade" id="kids" role="tabpanel" aria-labelledby="kids-tab"><KidsList /></div>
        </div>
      </div>
    </div>
    );
   }
}
export default Navbar;