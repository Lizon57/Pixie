import { utilService } from '../../../../../service/util-service';

export function getHero1() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: 'URL(https://images.unsplash.com/photo-1599707367072-cd6ada2bc375)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingBlockStart: '30px',
                paddingBlockEnd: '30px',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                height: '500px',
            }
        },
        childs: [{
            id: utilService.makeId(),
            type: 'span',
            role: 'childless',
            prefs: {
                style: {
                    color: '#eeeeee',
                    fontSize: '60px',
                    fontFamily: 'cinzel',
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
                    alignSelf: 'center',
                    display: 'flex',
                    border: 'none',
                    borderRadius: '2px',
                    backgroundColor: '#eee',
                    color: 'black',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    paddingBlockStart: '10px',
                    paddingBlockEnd: '10px',
                    paddingInlineStart: '20px',
                    paddingInlineEnd: '20px',
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
                    display: 'flex',
                    alignSelf: 'flex-end',
                    color: '#c8c8c8',
                    fontSize: '30px',
                    fontFamily: 'cinzel',
                }
            },
            txt: 'The hardest material on earth.'
        }]
    })
}