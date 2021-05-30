import { utilService } from '../../../../service/util-service.js'

export function getHeader1() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        prefs: {
            className: "",
            style: {
                height: '50px',
                'fontFamily': 'RobotoMono',
                display: 'flex',
                'justifyContent': 'space-between',
                'alignItems': 'center',
                'paddingRight': '30px',
                'paddingLeft': '30px',
                'backgroundColor': '#eee',
                'color': '#1e1e1e'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                prefs: {
                    style: {
                        backgroundImage: 'url("https://about.gitlab.com/images/press/logo/png/gitlab-icon-1-color-black-rgb.png")',
                        backgroundSize: 'contain',
                        height: '50px',
                        width: '50px'
                    }
                },
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        'fontFamily': 'Oxanium',
                    }
                },
                txt: 'NAME HERE'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                },
                txt: 'ABOUT'
            }
        ]
    })
}