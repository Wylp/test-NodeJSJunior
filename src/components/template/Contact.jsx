import '../style/Contact.css'
import React, { Component } from 'react'

import LanguageList from '../data/languageList'
import CountryList from '../data/countryList'

const initialState = {
    user: {
           firstName: "",
           lastName:"",
           email:"",
           phone:"",
           language:"",
           country:""
            }
}

export default class Contact extends Component{

    constructor(props) {
        super(props);
        this.state = {...initialState}
    }

    
    updateField(event){
        const user = {...this.state.user}
        user[event.target.id] = event.target.value
        this.setState({ user })
        console.log(JSON.stringify(user))
    }

    render(){
            return(
                <div className="contact">
                <h1>Contact Information:</h1>
                <div className="form">
                    <div className="row">

                        <div className="column">
                            <input id="firstName" type="text" placeholder="First Name:" required
                                value={this.state.user.firstName}
                                onChange={e => this.updateField(e)}/>
                        </div>

                        <div className="column">
                            <input id="lastName" type="text" placeholder="Last Name:" required
                                value={this.state.user.lastName}
                                onChange={e => this.updateField(e)}/>
                        </div>

                    </div>

                    <div className="row">

                        <div className="column">
                            <input id="email" type="email" placeholder="Email Adress:" required
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}/>
                        </div>

                        <div className="column">
                            <input id="phone" type="tel" placeholder="Phone:" required
                                value={this.state.user.phone}
                                onChange={e => this.updateField(e)}/>
                        </div>

                    </div>
                    <div className="row">

                        <div className="column">
                            <input id="language" list="languageList" placeholder="Language:"required
                                value={this.state.user.language}
                                onChange={e => this.updateField(e)}/>
                            <LanguageList />
                        </div>

                        <div className="column">
                            <input id="country" list="countryList" placeholder="Country" required
                                value={this.state.user.country}
                                onChange={e => this.updateField(e)}/>
                            <CountryList/>
                        </div>

                    </div>
                    
                </div>
            </div>
        )
    }

}