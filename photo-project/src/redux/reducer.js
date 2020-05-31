import allPhotos from '../data/allPhotos'

const allPhotosReducer = function(state = allPhotos , action) {
    console.log(action.index)
    return state
}

export default allPhotosReducer