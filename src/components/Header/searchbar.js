import React,{Component} from 'react';
import './searchbar.scss';
class  Searchbar extends Component {
render() {
return(
<form className ="search-form">
   <div className ="input-group p-1">
      <div className ="input-group-prepend border-0">
         <button id="button-addon4" type="button" className ="btn btn-link text-info"><i className ="fa fa-search"></i></button>
      </div>
      <input type="search" id="searchinput" placeholder="Search for 'solid wood bed' " aria-describedby="button-addon4" className ="form-control bg-none border-0 bg-transparent border-0 search-width" />
   </div>
</form>
);
}
}
export default Searchbar;