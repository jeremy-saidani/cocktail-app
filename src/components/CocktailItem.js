import React  from 'react'

function CocktailItem({cocktail}){

    const ingredients = Object.keys(cocktail)
    .filter(key => key.indexOf('strIngredient') == 0)
    .map(key => cocktail[key])
    .filter(ingredient => !! ingredient )

    const mesures = Object.keys(cocktail)
    .filter(key => key.indexOf('strMeasure') == 0)
    .map(key => cocktail[key]).filter(measure => !! measure)

    return (
        <div className="row">
            <div className="col">
                <img src={cocktail.strDrinkThumb} className="img-thumbnail float-right mr-2 mt-2" style={{width:'200px'}} />
                <div className="jumbotron">
                    <h1 className="display-4">{cocktail.strDrink}</h1>
                    <p className="lead">{cocktail.strCategory}, {cocktail.strIBA}, {cocktail.strAlcoholic} </p>
                    <hr className="my-4" />
                    <div className="mb-2">{ingredients.map((ingredient, index) => 
                        <span className="border rounded border-light bg-primary text-light mx-2 p-1">
                        {ingredient}
                        {mesures[index] != null && <span className="bg-light text-dark ml-2 pl-1">{mesures[index]}</span>}
                        </span>
                    )}</div>
                    <p>{cocktail.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default CocktailItem