import {database} from '../database/config'

export function startAddingPhoto(photo) {
    return (dispatch) => {
        return database.ref('allPhotos').update({[photo.id] : photo}).then(() => {
            dispatch(addPhoto(photo))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingPhotos() {
    return (dispatch) => {
        return database.ref('allPhotos').once('value').then((snapshot) => {
            let allPhotos = []
            snapshot.forEach((childsnapshot) => {               
                allPhotos.push( childsnapshot.val() )               
            })
            dispatch(loadPhoto(allPhotos))
        })
    }
}

export function removePhoto(index) {
    return {
        type: 'REMOVE_PHOTO',
        index
    }
}

export function addPhoto(photo) {
    return {
        type: 'ADD_PHOTO',
        photo
    }
}

export function addComment(comment, photoId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        photoId
    }
}

export function loadPhoto(allPhotos) {
    return {
        type : 'LOAD_PHOTOS',
        allPhotos
    }
}