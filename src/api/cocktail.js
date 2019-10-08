export function getCocktails(search){
    search = encodeURI(search)
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+search)
}

export function getCocktailsByFirstLetter(firstLetter){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f='+firstLetter)
}

export function getCocktailById(id){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
}

export function getRandomCocktail(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')

}