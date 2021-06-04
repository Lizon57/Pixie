import { utilService } from '../../../../../service/util-service'

export function getCoffeeHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: "coffee-hero",
            style: {
                display: 'flex',
                padding: '30px',
                backgroundColor: '#FBF5EF',
                flexDirection: 'column',
            }
        },
        childs: [
            {
                id: utilService.makeId(), //HERO LEFT
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: "coffee-hero-left",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        alignItems: 'center',
                        gap: '15px',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(), //HERO LEFT SPAN CONT
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            style: {
                                fontSize: '50px',
                                fontFamily: 'Literata',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                    }
                                },
                                txt: 'Don\'t let bad '
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        color: '#A67D69',
                                    }
                                },
                                txt: 'coffee '
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                    }
                                },
                                txt: 'spoil your day. Brew better coffee '
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        color: '#A67D69',
                                    }
                                },
                                txt: 'today!'
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontFamily: 'Mulish',
                                lineHeight: '1.75em',
                            }
                        },
                        txt: 'Learn about the latest coffee gear and brewing techniques today with our informative coffee guides. Brewing coffee shouldn\'t be rocket science. Let us help! Stay informed with the latest coffee information today with The Coffee Guru coffee blog!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            style: {
                                padding: '15px 20px',
                                borderRadius: '30px',
                                fontFamily: 'Montserrat',
                                border: 'none',
                                backgroundColor: '#A67D69',
                                color: '#EEEEEE',
                            }
                        },
                        txt: 'JOIN TODAY',
                    },
                ]
            },
            {
                id: utilService.makeId(), //HERO RIGHT 
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                        width: '50%',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                width: '75%',
                                height: '150px',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622798617/mypics/jptgwhbuq1gklcukkk6h.png")',
                            }
                        },
                    }
                ]
            }
        ]
    })
}