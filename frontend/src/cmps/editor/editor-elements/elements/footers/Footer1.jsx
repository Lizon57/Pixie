import { utilService } from '../../../../../service/util-service';

export function getFooter1() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                fontFamily: 'inter',
                height: '40px',
                fontSize: '16px',
                backgroundColor: '#ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderTop: '2px #cf0000 solid',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                txt: '© Hot-Bowls inc. 1995',
                role: 'childless',
                prefs: {
                    style: {
                    }
                }
            },
            
        ]
    })
}