import React, {Component} from 'react';
import author from '../../images/Ellipse 263.png';
import share from '../../images/Icon.png';
import whatsapp from '../../images/Group 13038.png';
class Author extends Component {
render() {
return(
<div className="author">
   <div className="col-md-12">
     <div className="row">
      <div className="col-md-1 col-sm-1 px-0 ml-auto my-auto">
         <img src={author} alt="author" />
      </div>
      <div className="col-md-7 col-sm-7 ps-0">
         <p >Author</p>
         <p>Kiran Preet Kaur | Jan 8, 2021</p>
      </div>
      <div className="col-md-2 col-sm-2 my-auto">
         <img className="mx-3" src={share} alt="share"/> <img className="mx-3" src={whatsapp} alt="whatsapp"/>
      </div>
   </div>
</div>
</div>

);
}
}
export default Author;