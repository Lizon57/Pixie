import { utilService } from '../../../../../service/util-service';

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
                justifyContent: 'flex-start',
                backgroundColor: '#e2e2e2',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                paddingBlockEnd: '15px',
                width: '100%',
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
                        display: 'flex',
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
                    className: 'responsive-card1',
                    style: {
                        display: 'flex',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                flexGrow: 1,
                                display: 'flex',
                                backgroundImage: 'url("https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd")',
                                backgroundPosition: 'right',
                                backgroundSize: 'cover',
                                minWidth: '350px',
                                minHeight: '350px',
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
                                        display: 'flex',
                                        fontSize: '40px',
                                        fontFamily: 'Caveat',
                                        textAlign: 'center',
                                        marginBlockEnd: '15px',

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
                                        display: 'flex',
                                        fontSize: '20px',
                                        fontFamily: 'RobotoSlab',
                                        textAlign: 'left',
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