import {FETCH_COCKTAILS, FETCH_COCKTAILS_SUCCESS, FETCH_COCKTAILS_ERROR} from './actions'

function cocktailsApp(state = {cocktails:[], isFetching:false, fetchError: null}, action){
    switch(action.type){
        case FETCH_COCKTAILS:
            return {...state,
                isFetching: true
            }
        case FETCH_COCKTAILS_SUCCESS:
            return {...state,
                isFetching: false,
                fetchError: null,
                cocktails: action.cocktails
            }
        case FETCH_COCKTAILS_ERROR:
            return {...state,
                isFetching:false,
                fetchError: action.error
            }
        default:
            return state
    }
}

export default cocktailsApp