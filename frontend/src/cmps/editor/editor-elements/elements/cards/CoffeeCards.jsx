import { utilService } from '../../../../../service/util-service.js'

export function getCoffeeCards() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            className: "coffee-card-container",
            style: {
                padding: '15px 30px',
                display: 'flex',
                gap: '30px',
                flexWrap: 'wrap',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    className: 'Coffee-card',
                    style: {
                        display: 'flex',
                        padding: '30px',
                        backgroundColor: '#fbf5ef',
                        display: 'flex',
                        minHeight: '200px',
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
                                width: '25%',
                                height: '100%',
                                borderRight: '1px #e0e0e0 solid',
                                marginRight: '10px',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622798617/mypics/jptgwhbuq1gklcukkk6h.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
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
                                gap: '15px',
                                width: '75%',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        fontSize: '24px',
                                        fontFamily: 'Montserrat',
                                    }
                                },
                                txt: 'COFFEE',
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        fontFamily: 'Mulish',
                                        color: '#6a6b6c',
                                    }
                                },
                                txt: 'Learn about coffee and all the various types of coffee beans, coffee roasts and coffee drinks!',
                            },
                        ]
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    className: 'Coffee-card',
                    style: {
                        display: 'flex',
                        padding: '30px',
                        backgroundColor: '#fbf5ef',
                        display: 'flex',
                        minHeight: '200px',
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
                                width: '25%',
                                height: '100%',
                                borderRight: '1px #e0e0e0 solid',
                                marginRight: '10px',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622798617/mypics/jptgwhbuq1gklcukkk6h.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
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
                                gap: '15px',
                                width: '75%',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        fontSize: '24px',
                                        fontFamily: 'Montserrat',
                                    }
                                },
                                txt: 'COFFEE',
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        fontFamily: 'Mulish',
                                        color: '#6a6b6c',
                                    }
                                },
                                txt: 'Learn about coffee and all the various types of coffee beans, coffee roasts and coffee drinks!',
                            },
                        ]
                    }
                ]
            }
        ]
    })
}

