import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupAd() {
    return (
        <div>
            <Popup trigger={
                <button>
                    Click Here For Free Walmart Coupons!
                </button>
            }>
            </Popup>
        </div>
    )
}