import { utilService } from '../../../../service/util-service.js'

export function getCards() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'card-container',
        isContainer: true,
        prefs: {
            className: "product-card-container"
        },
        childs: [
            {
                id: utilService.makeId(),
                cmpName: 'cards',
                type: 'div',
                role: 'card-img',
                prefs: {
                    className: "product-card-img",
                    style: {
                        backgroundImage: 'URL(https://images.unsplash.com/photo-1621570070325-dcf471675e35?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
                        backgroundSize: 'cover',
                    },
                },
            },
            {
                id: utilService.makeId(),
                cmpName: 'cards',
                type: 'div',
                role: 'card-img',
                prefs: {
                    style: {
                        backgroundImage: 'URL(https://images.unsplash.com/photo-1621570070325-dcf471675e35?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
                        backgroundSize: 'cover',
                    },
                    className: "product-card-img",
                },
            },
            {
                id: utilService.makeId(),
                cmpName: 'cards',
                type: 'div',
                role: 'card-img',
                prefs: {
                    style: {
                        backgroundImage: 'URL(https://images.unsplash.com/photo-1621570070325-dcf471675e35?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)',
                        backgroundSize: 'cover',
                    },
                    className: "product-card-img",
                },
            }
        ]
    })
}

