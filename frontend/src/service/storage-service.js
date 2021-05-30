export const storageService = {
    saveToStorage,
    loadFromStorage
}

function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return Promise.resolve;
}

function loadFromStorage(key) {
    const res = JSON.parse(localStorage.getItem(key));
    return new Promise((resolve, reject) => {
        resolve(res)
    })
}