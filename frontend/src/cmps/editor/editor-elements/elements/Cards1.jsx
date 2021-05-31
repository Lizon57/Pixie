import { utilService } from '../../../../service/util-service.js'

export function getCards1() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                paddingRight: '30px',
                paddingLeft: '30px',
                paddingBottom: '15px',
                justifyContent: 'flex-start',
                backgroundColor: '#e2e2e2'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                txt: 'ABOUT US.',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '60px',
                        fontFamily: 'Caveat',
                        width: '600px',
                        textAlign: 'center',
                    }
                }
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                backgroundImage: 'url("https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd")',
                                minWidth: '600px',
                                height: '350px',
                                backgroundPosition: 'right',
                                backgroundSize: 'cover',
                                flexGrow: 2,
                            }
                        },
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                marginLeft: '30px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                txt: 'WE DO FOOD.',
                                prefs: {
                                    style: {
                                        fontSize: '40px',
                                        marginBottom: '15px',
                                        fontFamily: 'Caveat',
                                    }
                                }
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                txt: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, atque quae tempora magnam omnis iure dolor? Beatae itaque quis autem officiis? Odio, dolorum ratione nobis voluptas necessitatibus explicabo neque cupiditate illum veritatis natus.',
                                prefs: {
                                    style: {
                                        fontSize: '20px',
                                        fontFamily: 'RobotoSlab',
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    })
}