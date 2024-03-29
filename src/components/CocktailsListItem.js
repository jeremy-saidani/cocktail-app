import React from 'react'
import {Link} from 'react-router-dom'

function CocktailListItem({cocktail}){
    return (
        <div className="col-xl-2 col-md-3 col-sm-6 col-12 my-2">
            <div className="card">
                <img src={cocktail.strDrinkThumb} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{cocktail.strDrink}</h5>
                    <Link to={"/cocktail/"+cocktail.idDrink} className="btn btn-primary btn-sm">Voir la recette</Link>
                </div>
            </div>
        </div>
    )
}

export default CocktailListItem