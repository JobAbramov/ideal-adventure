import React, { useState } from "react";

function Input(props){
    const [inputProps, setProps] = useState({
        type: props.type,
        placeholder: props.placeholder,
        id: props.id,
        label: props.label,
        onChange: event => props.onChange(event)
    })

    return(
        <div>
            <label htmlFor={inputProps.id}>{inputProps.label}</label>
            <input type={inputProps.type} id={inputProps.id} placeholder={inputProps.placeholder} onChange={event =>inputProps.onChange(event)}></input>
        </div>
        
    )
}


export default Input