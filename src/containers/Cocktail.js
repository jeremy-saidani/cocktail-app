import React from 'react'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router'
import CocktailItem from '../components/CocktailItem'
import {doFetchCocktailById} from './../store/actions'

function Cocktail(props){

    const dispatch = useDispatch()
    let {id} = useParams()

    useEffect(() => {
        dispatch(doFetchCocktailById(id))
    }, [])

    const cocktail = useSelector(state => state.cocktails.find(cocktail => cocktail.idDrink == id))

    if(cocktail != null) return <CocktailItem cocktail={cocktail} />
    else return null
    
}

export default Cocktail