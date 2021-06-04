import { utilService } from '../../../../../service/util-service.js'

export function getMaizFooter() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer',
        isContainer: true,
        prefs: {
            className: 'maiz-footer',
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                justifyContent: 'space-between',
                padding: '30px',
                fontSize: '18px',
                color: '#EEEEEE',
                backgroundColor: '#262931',
                fontFamily: 'Montserrat',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                    }
                },
                txt: '© 2019 Maiz Hospitality Pvt Ltd.'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        color: '#FBA91A',
                        fontSize: '24px',
                    }
                },
                txt: 'MAIZ'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                    }
                },
                txt: 'Privacy Policy | About'
            },
        ]
    })
}

