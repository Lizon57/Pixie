import { utilService } from '../../../../service/util-service.js'

export function getNavbar() {
    return ({
        id: utilService.makeId(),
        type: 'nav',
        role: 'nav',
        prefs: {
            className: "product-nav-bar"
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "product-logo"
                },
                txt: 'Logo',
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                prefs: {
                    className: "product-nav-btns"
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            className: "nav-btn"
                        },
                        txt: 'Home'

                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            className: "nav-btn"
                        },
                        txt: 'Contact',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            className: "nav-btn"
                        },
                        txt: 'About',
                    }]
            }
        ]
    })
}