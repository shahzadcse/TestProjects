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
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startRemovingPhoto( index, id) {
    return (dispatch) => {
        return database.ref(`allPhotos/${id}`).remove().then(() => {
            dispatch(removePhoto(index))
        } ).catch((error) => {
            console.log(error)
        })
    }
}

export function startAddingComment(comment, photoId) {
    return (dispatch) => {
        return database.ref('comments/'+photoId).push(comment).then(() => {
            dispatch(addComment(comment, photoId))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return database.ref('comments').once('value').then((snapshot)=> {
            let comments = {}
            snapshot.forEach((childsnapshot) => {
                comments[childsnapshot.key] = Object.values(childsnapshot.val())
                dispatch(loadComments(comments))
            })
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

export function loadComments(comments) {
    return {
        type : 'LOAD_COMMENTS',
        comments
    }
}