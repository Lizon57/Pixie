import { utilService } from '../../../../service/util-service.js'

export function getBox() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        prefs: {
            style: {
                display: 'flex',
                height: '400px',
                width: '100%'
            }
        },
        childs: []
    })
}