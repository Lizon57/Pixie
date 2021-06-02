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
                width: '100%',
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
                        flexWrap: 'wrap',
                        width: '100%',


                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            className: 'responsive-card',
                            style: {
                                backgroundImage: 'url("https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd")',
                                // minWidth: '350px',
                                height: '350px',
                                backgroundPosition: 'right',
                                backgroundSize: 'cover',
                                flex: 1,
                            }
                        },
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            className: 'responsive-card',
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
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
                                        textAlign: 'center',

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
                                        textAlign: 'center',

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