import { utilService } from '../../../../../service/util-service';

export function getCards2() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingLeft: '30px',
                paddingRight: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                txt: 'Our Dishes',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '35px',
                        fontFamily: 'caveat',
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
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                width: '250px',
                                height: '350px',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '5px',
                                border: '1px solid #ccc',
                                margin: '15px',
                                alignItems: 'center',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'img',
                                prefs: {
                                    style: {
                                        width: '100%',
                                        height: '80%',
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }
                                },
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                txt: 'Pad Thai',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '25px',
                                        fontFamily: 'caveat',
                                    }
                                }
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                width: '250px',
                                height: '350px',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '5px',
                                border: '1px solid #ccc',
                                margin: '15px',
                                alignItems: 'center',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'img',
                                prefs: {
                                    style: {
                                        width: '100%',
                                        height: '80%',
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }
                                },
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                txt: 'Curry Soup',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '25px',
                                        fontFamily: 'caveat',
                                    }
                                }
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                width: '250px',
                                height: '350px',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '5px',
                                border: '1px solid #ccc',
                                margin: '15px',
                                alignItems: 'center',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'img',
                                prefs: {
                                    style: {
                                        width: '100%',
                                        height: '80%',
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1514540746696-d285708190bb")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }
                                },
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                txt: 'Mushroom Soup',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '25px',
                                        fontFamily: 'caveat',
                                    }
                                }
                            },
                        ]
                    },
                ]
            }
        ]
    })
}