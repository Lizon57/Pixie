import { utilService } from '../../../../../service/util-service'

export function getHero2() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            style: {
                paddingRight: '30px',
                paddingLeft: '30px',
                height: '600px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1551244072-5d12893278ab")',
                backgroundSize: 'cover',
                display: 'flex',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#00000080',
                        padding: '30px',
                        marginTop: '80px',
                        borderRadius: '20px',
                        height: '165px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '70px',
                                color: '#BBD3E6',
                                fontFamily: 'Grandstander',
                            }
                        },
                        txt: 'We Love the Sea'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '35px',
                                color: '#528cbd',
                                fontFamily: 'Grandstander',
                            }
                        },
                        txt: 'Come sea why...'
                    },
                ]
            },
        ]
    })
}