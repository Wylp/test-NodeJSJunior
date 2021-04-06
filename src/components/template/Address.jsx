import '../style/Address.css'
import React, { Component } from 'react'

import CityList from '../data/cityList'
import StateList from '../data/StateList'

const initialState = {
    user: {
           addressLine1: "",
           addressLine2:"",
           city:"",
           state:"",
           zipCode:""
            }
}

export default class Address extends Component{

    constructor(props) {
        super(props);
        this.state = { ...initialState }
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.id] = event.target.value
        this.setState({ user })
    }
    
    render(){
        return(
            <div className="address">
                <h1>Shipping Address:</h1>
                <div className="form">
        
                    <div className="row">
                        <input id="addressLine1" type="text" placeholder="Adress Line 1:" required
                            value={this.state.user.addressLine1}
                            onChange={e => this.updateField(e)}/>
                    </div>
        
                    <div className="row">
                        <input id="addressLine2" type="text" placeholder="Adress Line 2:" required
                            value={this.state.user.addressLine2}
                            onChange={e => this.updateField(e)}/>
                    </div>
        
                    <div className="row" id="addressRow">
        
                        <div className="column">
                            <input id="city" list="cityList" placeholder="City:" required
                                value={this.state.user.city}
                                onChange={e => this.updateField(e)}/>
                            <CityList />
                        </div>
        
                        <div className="column">
                            <input id="state" list="stateList" placeholder="State:" required
                                value={this.state.user.state}
                                onChange={e => this.updateField(e)}/>
                            <StateList />
                        </div>
        
                        <div className="column">
                            <input id="zipCode" type="num" placeholder="Zip-Code:" required
                                value={this.state.user.zipCode}
                                onChange={e => this.updateField(e)}/>
                        </div>
        
                    </div>
                </div>
            </div>
        )
    }
}
    
