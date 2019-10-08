import React from 'react'
import CocktailsListItem from './CocktailsListItem'
import Spinner from './Spinner'
import AlertError from './AlertError'

function CocktailsList({cocktails, isFetching, fetchError, title}){
    return (
        <div className="row">
        <div className="col">
            {cocktails.length > 0 && <h5>{title}</h5> }
            <AlertError error={fetchError} />
            <Spinner spin={isFetching} />
            <div className="row">
                {cocktails.map(cocktail => <CocktailsListItem key={cocktail.idDrink} cocktail={cocktail} />)}
            </div>
        </div>
        </div>
    )
}

export default CocktailsList