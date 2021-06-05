import { utilService } from '../../../../../service/util-service';

export function getHero1() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        isContainer: true,
        prefs: {
            style: {
                minHeight: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                backgroundImage: 'URL(https://images.unsplash.com/photo-1599707367072-cd6ada2bc375)',
            }
        },
        childs: [{
            id: utilService.makeId(),
            type: 'span',
            role: 'childless',
            prefs: {
                style: {
                    fontSize: '60px',
                    fontFamily: 'cinzel',
                    color: '#eee',
                }
            },
            txt: 'DIAMONDS.'
        },
        {
            id: utilService.makeId(),
            type: 'button',
            role: 'childless',
            prefs: {
                style: {
                    paddingBottom: '10px',
                    paddingTop: '10px',
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    fontSize: '18px',
                    fontFamily: 'Inter',
                    alignSelf: 'center',
                    border: 'none',
                    backgroundColor: '#eee',
                    color: 'black',
                    borderRadius: '2px',
                }
            },
            txt: 'FIND OUT',
        },
        {
            id: utilService.makeId(),
            type: 'span',
            role: 'childless',
            prefs: {
                style: {
                    fontFamily: 'cinzel',
                    fontSize: '30px',
                    color: '#c8c8c8',
                    alignSelf: 'flex-end',
                }
            },
            txt: 'The hardest material on earth.'
        }]
    })
}