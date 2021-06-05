import { utilService } from '../../../../../service/util-service';

export function getFlowerCards() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-cards-container',
            style: {
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-card',
                    style: {
                        padding: '30px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        fontFamily: 'Josefine Sans',
                        borderRadius: '5px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fas deliver-icon',
                            style: {
                                fontSize: '50px',
                                color: '#EF903A',
                                marginBottom: '30px',
                            }
                        },
                        txt: ''
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBottom: '24px',
                            }
                        },
                        txt: 'Delivery Around Tel-Aviv'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '18px',
                            }
                        },
                        txt: 'From Herzliya to Holon, we provide free deliveries.'
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-card',
                    style: {
                        padding: '30px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        fontFamily: 'Josefine Sans',
                        borderRadius: '5px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fas fast-icon',
                            style: {
                                fontSize: '50px',
                                color: '#EF903A',
                                marginBottom: '30px',
                            }
                        },
                        txt: ''
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBottom: '24px',
                            }
                        },
                        txt: 'Quick to Arive'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '18px',
                            }
                        },
                        txt: 'Call us - an hour later the flowers will be at your doorstep. Guaranteed.'
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-card',
                    style: {
                        padding: '30px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        fontFamily: 'Josefine Sans',
                        borderRadius: '5px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fas care-icon',
                            style: {
                                fontSize: '50px',
                                color: '#EF903A',
                                marginBottom: '30px',
                            }
                        },
                        txt: ''
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBottom: '24px',
                            }
                        },
                        txt: 'Handled With Care'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '18px',
                            }
                        },
                        txt: 'Get fresh and beautiful floral arrangements, hand-delivered with care.'
                    }
                ]
            }
        ]
    })
}