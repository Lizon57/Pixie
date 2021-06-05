import { utilService } from '../../../../../service/util-service';

export function getFooter1() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#cccccc',
                fontSize: '16px',
                fontFamily: 'inter',
                borderStyle: 'solid',
                borderBlockStartWidth: '2px',
                borderBlockStartColor: '#cf0000',
                borderBlockEndWidth: '0',
                borderInlineStartWidth: '0',
                borderInlineEndWidth: '0',
                height: '40px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex'
                    }
                },
                txt: '© Hot-Bowls inc. 1995',
            },

        ]
    })
}