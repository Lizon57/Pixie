import { utilService } from '../../../../service/util-service.js'

export function getHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'URL(https://www.ppt-backgrounds.net/thumbs/jungles-hd-pictures--live-hd-hq-pictures-images---frame-slides.jpeg)',
                backgroundSize: 'cover',
                height: '400px',
                width: '100%',
            }
        },
        childs: [{
            id: utilService.makeId(),
            type: 'span',
            role: 'childless',
            prefs: {
                style: {
                    display: 'flex',
                    fontSize: '30px',
                    color: '#FFFFFF'
                }
            },
            txt: 'IM BIG HERO!!!'
        },
        {
            id: utilService.makeId(),
            type: 'button',
            role: 'childless',
            prefs: {
                style: {
                    display: 'flex',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    color: '#fff000',
                    padding: '10px',
                    marginTop: '15px'
                }
            },
            txt: 'take me!',
        }]
    })
}