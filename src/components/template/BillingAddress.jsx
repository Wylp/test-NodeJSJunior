import '../style/Address.css'
import React, { Component } from 'react'

import CityList from '../data/cityList'
import StateList from '../data/StateList'

const initialState = {
    user: {
           addressLineBilling: "",
           addressLine2Billing:"",
           cityBilling:"",
           stateBilling:"",
           zipCodeBilling:""
            },
    disabled: false
}

export default class BillingAddress extends Component{

    constructor(props) {
        super(props);
        this.state = { ...initialState }
    }

    disable(){
        this.setState( {disabled: !this.state.disabled} )
        this.setState({user: initialState.user})
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.id] = event.target.value
        this.setState({ user })
    }

    render(){
        return(
            <div className="address">
                <h1>Billing Address:</h1>
                <div className="form">
        
                    <div className="row">
                        <input id="addressLineBilling" type="text" placeholder="Address Line 1:" required
                            value={this.state.user.addressLineBilling}
                            onChange={e => this.updateField(e)}
                            disabled = {(this.state.disabled)? "disabled" : ""} />
                    </div>
        
                    <div className="row">
                        <input id="addressLine2Billing" type="text" placeholder="Address Line 2:" required
                            value={this.state.user.addressLine2Billing}
                            onChange={e => this.updateField(e)}
                            disabled = {(this.state.disabled)? "disabled" : ""}/>
                    </div>
        
                    <div className="row" id="addressRow">
        
                        <div className="column">
                            <input id="cityBilling" list="cityList" placeholder="City:" required
                                value={this.state.user.cityBilling}
                                onChange={e => this.updateField(e)}
                                disabled = {(this.state.disabled)? "disabled" : ""}/>
                            <CityList />
                        </div>
        
                        <div className="column">
                            <input id="stateBilling" list="stateList" placeholder="State:" required
                                value={this.state.user.stateBilling}
                                onChange={e => this.updateField(e)}
                                disabled = {(this.state.disabled)? "disabled" : ""}/>
                            <StateList />
                        </div>
        
                        <div className="column">
                            <input id="zipCodeBilling" type="num" placeholder="Zip-Code:" required
                                value={this.state.user.zipCodeBilling}
                                onChange={e => this.updateField(e)}
                                disabled = {(this.state.disabled)? "disabled" : ""}/>
                        </div>

                        <div className="check">
                            <input id="billing" type="checkbox" onChange={e => this.disable(e)}/>
                            <label>Use shipping address same as billing address.</label>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}