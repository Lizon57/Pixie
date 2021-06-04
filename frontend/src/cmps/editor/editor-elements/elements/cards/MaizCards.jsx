import { utilService } from '../../../../../service/util-service.js'

export function getMaizCards() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            className: "maiz-cards-container",
            style: {
                display: 'flex',
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
                    className: "maiz-cards",
                    style: {
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '30px',
                        textAlign: 'center',
                        height: '120vw',
                        backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622758513/mypics/rzhpqqp6rzvz6vybhwoj.jpg")',
                        backgroundSize: 'cover',
                        color: '#EEEEEE',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontSize: '42px',
                                fontFamily: 'Blenda Script',
                            }
                        },
                        txt: 'Authentic',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                            }
                        },
                        txt: 'We serve only one cuisine',
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    className: "maiz-cards",
                    style: {
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '30px',
                        textAlign: 'center',
                        height: '120vw',
                        backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622758482/mypics/xqyy1a9ow5l4z5vl2q4v.jpg")',
                        backgroundSize: 'cover',
                        color: '#EEEEEE',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontSize: '42px',
                                fontFamily: 'Blenda Script',
                            }
                        },
                        txt: 'Healthy',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                            }
                        },
                        txt: 'You can eat our food without feeling guilty',
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    className: "maiz-cards",
                    style: {
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '30px',
                        textAlign: 'center',
                        height: '120vw',
                        backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622742714/mypics/bonc9ea7ln4np4tcejzr.jpg")',
                        backgroundSize: 'cover',
                        color: '#EEEEEE',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontSize: '42px',
                                fontFamily: 'Blenda Script',
                            }
                        },
                        txt: 'Fresh',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                            }
                        },
                        txt: 'The produce is fresh, but so is the cooking',
                    },
                ]
            },
        ]
    })
}

