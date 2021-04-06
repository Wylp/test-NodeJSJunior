import '../style/Logo.css'
import React from 'react'
import Logo from '../../assets/logo.png'

function logo(){
    return(
        <aside className="logo">
            <img src={Logo} alt="Logo"/>
        </aside>
    )
}


export default logo;
    
    