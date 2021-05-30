// Export functions
export const utilService = {
    makeId
}

// Define makeId() - creates random id in the length given (25 is default) 
function makeId(length = 25) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < length; i++) {
        id += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return id
}