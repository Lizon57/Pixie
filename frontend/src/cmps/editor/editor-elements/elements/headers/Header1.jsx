import { utilService } from '../../../../../service/util-service';

export function getHeader1() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                height: '50px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '30px',
                paddingLeft: '30px',
                backgroundColor: '#eeeeee'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
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
                        fontFamily: 'Oxanium',
                        color: '#1e1e1e'
                    }
                },
                txt: 'NAME HERE'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        fontFamily: 'RobotoMono',
                        color: '#1e1e1e'
                    }
                },
                txt: 'ABOUT'
            }
        ]
    })
}