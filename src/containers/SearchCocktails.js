import React from 'react'
import {useSelector} from 'react-redux'
import CocktailsList from '../components/CocktailsList'

function SearchCocktails(){
    
    const cocktails = useSelector(state => state.cocktails)
    const isFetching = useSelector(state => state.isFetching)
    const fetchError = useSelector(state => state.fetchError)
    
    return (
        <div className="row mt-3">
            <div className="col">
                <CocktailsList cocktails={cocktails} isFetching={isFetching} fetchError={fetchError} title="Les résusltats de cocktails"/>
            </div>
        </div>
    )
}

export default SearchCocktails