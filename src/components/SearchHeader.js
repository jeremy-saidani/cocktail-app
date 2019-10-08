import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useRouteMatch, useHistory} from 'react-router'
import {doFetchCocktails} from './../store/actions'


function SearchHeader(){

    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const match = useRouteMatch('/search')
    const history = useHistory()

    function handleSearch(e) {

        dispatch(doFetchCocktails(search)).then(() => {
            if(!match) history.push('/search')
        })

        e.preventDefault()
        e.stopPropagation()

    }

    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={e => handleSearch(e)}>
            <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" onChange={e => setSearch(e.target.value)} />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Rechercher</button>
        </form>
    )
}

export default SearchHeader