import React from 'react'
import StyledSearchBox from './styled/StyledSearchBox'

export default function SerachBox( { className, placeholder, label, size, color, inputRef, value } ) {

    return (
        <StyledSearchBox display="flex-column" gap="0.6vh" size={size} color={color} >
            
            <label htmlFor={className}> {label} </label>
            <div> <input className={`input ${className} `} name={className} type="text" placeholder={placeholder} ref={inputRef} value={value}/> </div>

        </StyledSearchBox>
    )
}
