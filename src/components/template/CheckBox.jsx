import '../style/CheckBox.css'
import React, { Component } from 'react'

const initialState = {
           fuel: false,
           trackers: false,
           indentify: false,
           numTrackers:""
}

export default class CheckBox extends Component{

    constructor(props) {
        super(props);
        this.state = { ...initialState }

        this.updateField = this.updateField.bind(this)
    }

    updateField(event){
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;
        
        this.setState({
            [id]: value
        });
    }
    
    render(){
        return(
            <div className="checkBox">
                <h1>Check the boxes below:</h1>
                <div className="form">

                    <div className="row">
                        <div className="check">
                            <input id="fuel" type="checkbox"
                                checked={this.state.fuel}
                                onChange={this.updateField}/>
                            <label>Does any vehicle need to be equiped with fuel cut off device?</label>
                        </div>

                        <div className="check">
                            <input id="trackers" type="checkbox" 
                                checked={this.state.trackers}
                                onChange={this.updateField}/>
                            <label>Will any trackers be installed on a bike, truck or machinery?</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="check">
                            <input id="indentify" type="checkbox"
                                checked={this.state.indentify}
                                onChange={this.updateField}/>
                            <label>Will you need to identify the fleet drivers ?</label>
                        </div>
                    </div>
                    
                    <div className="row track">
                        <input id="numTrackers" type="number" name="trackers" 
                            min = "1" max="10"
                            value={this.state.numTrackers}
                            onChange={this.updateField}
                            placeholder="How many trackers would you like to purchase?"/>
                    </div>

                </div>
            </div>
        )
    }
}
