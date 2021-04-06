import './Content.css'
import React, { Component } from 'react'

import Contact from '../template/Contact'
import Address from '../template/Address'
import BillingAddress from '../template/BillingAddress'
import CheckBox from '../template/CheckBox'

export default class Content extends Component{  
    render(){
        return(
            <div className="main">
                <div className="content">
                    <div className="grid">
                        <Contact/>
                        <Address/>
                        <BillingAddress/>
                        <CheckBox />
                    </div>
                </div>

                <div className="footer">
                    <button className="submit">
                            Order Now
                    </button>
                </div>
            </div>
        )
    }

}
