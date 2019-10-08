import React from 'react'

function AlertError({error}){
    if(error != null) return (<div className="alert alert-success" role="alert">Une erreur est servenue.</div>)
    else return null
}

export default AlertError