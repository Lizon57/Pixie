import { utilService } from '../../../../../service/util-service';

export function getHeader4() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                alignItems: 'center',
                borderStyle: 'solid',
                borderBlockEndColor: '#cf0000',
                borderBlockEndWidth: '2px',
                borderBlockStartWidth: '0',
                borderInlineStartWidth: '0',
                borderInlineEndWidth: '0',
                backgroundColor: '#eeeeee',
                fontSize: '30px',
                paddingLeft: '30px',
                paddingRight: '30px',
                height: '60px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    style: {
                        backgroundImage: 'url("https://image.flaticon.com/icons/png/512/114/114931.png")',
                        backgroundSize: 'cover',
                        marginInlineEnd: '30px',
                        height: '50px',
                        width: '50px',
                    }
                },
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        fontFamily: 'Caveat',
                        color: '#cf0000',
                    }
                },
                txt: 'Foody Food'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        fontFamily: 'Caveat',
                    }
                },
                txt: 'About us'
            }
        ]
    })
}