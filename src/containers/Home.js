import React from 'react'
import CocktailsList from './../components/CocktailsList'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import {useEffect} from 'react'
import {doFetchRandomCocktails} from './../store/actions'

function Home(){

    const dispatch = useDispatch()
    let {letter} = useParams()

    useEffect(() => {
        dispatch(doFetchRandomCocktails()).then(()=>{})
    }, [letter])

    const cocktails = useSelector(state => state.cocktails)
    const isFetching = useSelector(state => state.isFetching)
    const fetchError = useSelector(state => state.fetchError)

    return (
        <div className="row mt-3">
            <div className="col">
                <h4 className="mb-3">Bienvenue sur l'application des cocktails !</h4>
                <CocktailsList cocktails={cocktails} isFetching={isFetching} fetchError={fetchError} title="Les cocktails du moment"/>
            </div>
        </div>
    )
}

export default Home