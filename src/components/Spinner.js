import React from 'react'

function Spinner({spin}){
    if(spin) return (
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
    else return null
}

export default Spinner