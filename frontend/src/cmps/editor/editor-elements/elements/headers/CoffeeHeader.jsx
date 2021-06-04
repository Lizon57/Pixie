import { utilService } from '../../../../../service/util-service';

export function getCoffeeHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                backgroundColor: '#FCF6F1',
                fontFamily: 'Montserrat',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                padding: '20px 30px',
                color: '#0C1115',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '24px',
                        flexGrow: 1,
                        fontFamily: 'Literata',
                        color: '#A67D69',
                    }
                },
                txt: 'The Coffee Guru'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                    }
                },
                txt: 'Coffee'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                        padding: '0px 10px',
                    }
                },
                txt: 'Brewing'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                        padding: '0px 10px',
                    }
                },
                txt: 'Guide'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "fas hamburger-icon",
                    style: {
                        padding: '0px 10px',
                    }
                },
                txt: ''
            },
        ]
    })
}