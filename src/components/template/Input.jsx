import React from "react"
import InputMask from "react-input-mask"

const Input = function(props){
    <InputMask mask={props.mask} value={props.value} onChange={props.onChange} id={props.id} placeholder={props.placeholder}
        type={props.type} list={props.list}/>
}

export default Input