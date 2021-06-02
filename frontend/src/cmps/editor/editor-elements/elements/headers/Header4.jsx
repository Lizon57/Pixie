import { utilService } from '../../../../../service/util-service';

export function getHeader4() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '30px',
                paddingLeft: '30px',
                paddingRight: '30px',
                borderBottomColor: '#cf0000',
                borderBottomWidth: '2px',
                borderBottomStyle: 'solid',
                backgroundColor: '#eee',
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
                        width: '50px',
                        height: '50px',
                        backgroundSize: 'cover',
                        marginRight: '30px',
                    }
                },
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
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
                        fontFamily: 'Caveat',
                        flex: 1,
                        textAlign: 'right',
                    }
                },
                txt: 'About us'
            }
        ]
    })
}