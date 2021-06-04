import { utilService } from '../../../../../service/util-service.js'

export function getCoffeeFooter() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backgroundColor: '#fbf5ef',
                color: '#6a6b6c',
                padding: '10px 30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        textAlign: 'center',
                    }
                },
                txt: '© The Coffee Guru'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '10px',
                        textAlign: 'center',
                    }
                },
                txt: 'We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.com and affiliated sites.'
            },
        ]
    })
}

