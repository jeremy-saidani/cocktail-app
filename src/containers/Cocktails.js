import React from 'react'
import AlphabeticList from './../components/AlphabeticList'
import CocktailsList from './../components/CocktailsList'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import {useEffect} from 'react'
import {doFetchCocktailsByFirstLetter} from './../store/actions'


function Cocktails(props){

    const dispatch = useDispatch()
    let {letter} = useParams()

    useEffect(() => {
        dispatch(doFetchCocktailsByFirstLetter(letter)).then(()=>{})
    }, [letter])

    const cocktails = useSelector(state => state.cocktails)
    const isFetching = useSelector(state => state.isFetching)
    const fetchError = useSelector(state => state.fetchError)

    return (
        <div>
            <AlphabeticList />
            <CocktailsList cocktails={cocktails} isFetching={isFetching} fetchError={fetchError} title="Les cocktails" />
        </div>
    )
}

export default Cocktails