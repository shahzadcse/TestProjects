import allPhotos from '../data/allPhotos'

const allPhotosReducer = function(state = allPhotos , action) {
    
    switch(action.type) {
        case 'REMOVE_PHOTO' : return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_PHOTO' : return [...state,action.photo]
        default: return state

    }
 
}

export default allPhotosReducer