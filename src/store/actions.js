import {getCocktails, getCocktailsByFirstLetter, getCocktailById, getRandomCocktail} from './../api/cocktail'

export const FETCH_COCKTAILS = 'FETCH_COCKTAILS'
export const FETCH_COCKTAILS_SUCCESS = 'FETCH_COCKTAILS_SUCCESS'
export const FETCH_COCKTAILS_ERROR = 'FETCH_COCKTAILS_ERROR'

export function fetchCocktails(){
    return {
        type: FETCH_COCKTAILS
    }
}

export function fetchCocktailsSuccess(cocktails){
    return {
        type: FETCH_COCKTAILS_SUCCESS,
        cocktails: cocktails
    }
}

export function fetchCocktailsError(error){
    return {
        type: FETCH_COCKTAILS_ERROR,
        error: error
    }
}

export function doFetchCocktails(search){

    return dispatch => {
        
        if(search === ''){
            dispatch(fetchCocktailsSuccess([]))
            return Promise.resolve()
        }
        
        dispatch(fetchCocktails())
    
        return getCocktails(search).then(response => response.json()).then(data => {
            if(data.drinks == null) data.drinks = []
            dispatch(fetchCocktailsSuccess(data.drinks))
        }).catch(e => {
            dispatch(fetchCocktailsError(e))
        })

    }

}

export function doFetchCocktailsByFirstLetter(firstLetter){

    return dispatch => {
        dispatch(fetchCocktails())

        return getCocktailsByFirstLetter(firstLetter).then(response => response.json()).then(data => {
            if(data.drinks == null) data.drinks = []
            dispatch(fetchCocktailsSuccess(data.drinks))
        }).catch(e => {
            dispatch(fetchCocktailsError(e))
        })

    }

}

export function doFetchCocktailById(id){

    return dispatch => {
        dispatch(fetchCocktails())

        return getCocktailById(id).then(response => response.json()).then(data => {
            if(data.drinks == null) data.drinks = []
            dispatch(fetchCocktailsSuccess(data.drinks))
        }).catch(e => {
            dispatch(fetchCocktailsError(e))
        })

    }

}

export function doFetchRandomCocktails(){

    return dispatch => {
        dispatch(fetchCocktails())
        let cocktails = []

        return Promise.all([getRandomCocktail(), getRandomCocktail(), getRandomCocktail(), getRandomCocktail()])
        .then(([response1, response2, response3, response4]) => {
            Promise.all([response1.json(), response2.json(), response3.json(), response4.json() ]).
            then(([data1, data2, data3, data4]) => {

                console.log(data1)

                cocktails.push(data1.drinks[0])
                cocktails.push(data2.drinks[0])
                cocktails.push(data3.drinks[0])
                cocktails.push(data4.drinks[0])

                dispatch(fetchCocktailsSuccess(cocktails))
            })
        })
        .catch(e => {
            dispatch(fetchCocktailsError(e))
        })

    }

}
