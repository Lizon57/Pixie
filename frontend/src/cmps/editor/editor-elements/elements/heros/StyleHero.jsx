import { utilService } from '../../../../../service/util-service'

export function getStyleHero() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'section',
        isContainer: true,
        prefs: {
            style: {
                paddingRight: '30px',
                paddingLeft: '30px',
                height: '100vh',
                backgroundImage: 'url("https://images.unsplash.com/photo-1584500403203-c9727ebf2a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        height: '85px',
                        width: '100%',
                        margin: '10px 0'
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'span',
                        prefs: {
                            style: {
                                display: 'flex',
                                height: '100%',
                                fontSize: '2rem',
                                alignItems: 'center',
                                fontFamily: 'Raleway',
                                fontWeight: '600',
                                color: '#fff',
                                flex: '1',
                                curson: 'pointer',

                            }
                        },
                        txt: 'STYLEPONT'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            className: 'header-product-nav-btns',
                            style: {
                                alignItems: 'center',
                                height: '100%',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        outline: 'none',
                                        border: 'none',
                                        fontFamily: 'Raleway',
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        color: '#fff',
                                        cursor: 'pointer',

                                    }
                                },
                                txt: 'Services'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        outline: 'none',
                                        border: 'none',
                                        fontFamily: 'Raleway',
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        color: '#fff',
                                        cursor: 'pointer',

                                    }
                                },
                                txt: 'Collections'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        outline: 'none',
                                        border: 'none',
                                        fontFamily: 'Raleway',
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        color: '#fff',
                                        cursor: 'pointer',

                                    }
                                },
                                txt: 'About'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        outline: 'none',
                                        border: 'none',
                                        fontFamily: 'Raleway',
                                        fontSize: '1.3rem',
                                        fontWeight: '600',
                                        color: '#fff',
                                        cursor: 'pointer',

                                    }
                                },
                                txt: 'Blog'
                            }
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'button',
                        prefs: {
                            className: 'product-header-humburger-btn',
                            style: {
                                alignItems: 'center',
                                height: '100%',
                                backgroundColor: 'transparent',
                                outline: 'none',
                                border: 'none',
                                fontFamily: 'Raleway',
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#fff',
                                cursor: 'pointer',

                            }
                        },
                        txt: '☰'
                    }


                ]
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'span',
                prefs: {
                    style: {
                        display: 'flex',
                        fontSize: '3.5rem',
                        width: '100%',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontFamily: 'Raleway',
                        fontWeight: '600',
                        color: '#fff',
                        textShadow: '0 0 5px #000'

                    }
                },
                txt: 'Do you believe in style?'
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'span',
                        prefs: {
                            style: {
                                display: 'flex',
                                fontSize: '1.5rem',
                                width: '100%',
                                justifyContent: 'center',
                                fontFamily: 'Raleway',
                                fontWeight: '600',
                                color: '#fff',
                                textShadow: '0 0 5px #000'

                            }
                        },
                        txt: 'scroll down'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'span',
                        prefs: {
                            style: {
                                display: 'flex',
                                fontSize: '2.5rem',
                                width: '100%',
                                justifyContent: 'center',
                                fontFamily: 'Raleway',
                                fontWeight: '600',
                                color: '#fff',
                                textShadow: '0 0 5px #000'

                            }
                        },
                        txt: '⬇'
                    }
                ]
            }

        ]
    })
}
