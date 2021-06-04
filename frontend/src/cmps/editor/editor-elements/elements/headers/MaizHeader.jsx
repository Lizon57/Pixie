import { utilService } from '../../../../../service/util-service';

export function getMaizHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                height: '90px',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '30px',
                paddingRight: '30px',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#EEEEEE',
                gap: '15px',
                backgroundColor: '#262931',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '42px',
                        flexGrow: 1,
                        color: '#FBA91A',
                        fontWeight: 'bold',
                    }
                },
                txt: 'MAIZ'
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
                txt: 'HOME'
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
                txt: 'MENU'
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
                txt: 'CATERING'
            },
            {
                id: utilService.makeId(),
                type: 'button',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        backgroundColor: '#FBA91A',
                        border: 'unset',
                        padding: '10px 20px 10px 20px',
                        fontSize: '1rem',
                    }
                },
                txt: 'ORDER NOW'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "fas hamburger-icon",
                    style: {
                        color: '#FBA91A',
                    }
                },
                txt: ''
            },
        ]
    })
}