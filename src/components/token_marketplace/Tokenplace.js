import React from 'react';
import Buytoken from './Buytoken';
import Redeemtoken from './Redeemtoken';
import "./tokenplace.css";

const Tokenpage = ({account}) => {
    return (
        <div>
            <div className="topbar">
                <div className="acc">
                    Account Number: {account}
                </div>
                <div className="tokens">
                    Current Token Count
                </div>
            </div>
            <Buytoken/>
            <Redeemtoken/>
        </div>
    )
}

export default Tokenpage
