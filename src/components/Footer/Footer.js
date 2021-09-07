import React, {Component} from 'react';
import Copyright from '../Footer/Copyright';
import Backgroundimage from '../Footer/Backgroundimage';
import FooterNav from '../Footer/FooterNav';
import Shopfooter from '../Footer/Shopfooter';
import FooterSeo from '../Footer/FooterSeo';

class Footer extends Component {
render() {
return(
<div className="bg-white">
   <Backgroundimage />
   <FooterNav />
   <Shopfooter />
   <FooterSeo />
   <Copyright />
</div>
);
}
}
export default Footer;