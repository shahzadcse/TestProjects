import _allPhotos from '../data/allPhotos'
import {combineReducers} from 'redux'

function comments( state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT' : 
            console.log(action.photoId)
        return [...state, action.comment]
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