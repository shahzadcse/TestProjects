import _allPhotos from '../data/allPhotos'
import {combineReducers} from 'redux'

function comments( state = {}, action) {
    switch(action.type) {
        case 'ADD_COMMENT' : 
            if(!state[action.photoId]) {
                return {...state, [action.photoId] : [action.comment]}
            }
            else {
                return {...state, [action.photoId] : [...state[action.photoId], action.comment]}
            }
       
        default : return state
    }
}

function allPhotos(state = _allPhotos , action) {
    
    switch(action.type) {
        case 'REMOVE_PHOTO' : return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_PHOTO' : return [...state,action.photo]
        default: return state
    }
 
}

const rootReducer = combineReducers({comments, allPhotos})

export default rootReducer