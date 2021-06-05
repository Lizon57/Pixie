import { utilService } from '../../../../../service/util-service'

export function getHero2() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                backgroundImage: 'url("https://images.unsplash.com/photo-1551244072-5d12893278ab")',
                backgroundSize: 'cover',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                height: '600px',
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
                        borderRadius: '20px',
                        backgroundColor: '#00000080',
                        paddingInlineStart: '30px',
                        paddingInlineEnd: '30px',
                        paddingBlockStart: '30px',
                        paddingBlockEnd: '30px',
                        marginBlockStart: '80px',
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
                                display: 'flex',
                                color: '#BBD3E6',
                                fontSize: '70px',
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
                                display: 'flex',
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