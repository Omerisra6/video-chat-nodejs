import React from 'react'
import StyledLoader from './styled/StyledLoader'

export default function Loader() {

    return (
        <StyledLoader className="lds"><div></div><div></div><div></div></StyledLoader>  
    )
}
