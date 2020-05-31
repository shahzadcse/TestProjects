
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