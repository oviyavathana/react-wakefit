import React, {Component} from 'react';
import './Copyright.scss';

class Copyright extends Component {
    render() {
        return(
            <div className="container">
            <div className = "bg-white">
                <p className="copyright mb-0"><strong>© 2021 Wakefit. All Rights Reserved </strong>  |    Wakefit name and logo are registered trademarks owned by Wakefit Innovations Pvt. Ltd </p>
            </div>
            </div>
        );
    }
}

export default Copyright;