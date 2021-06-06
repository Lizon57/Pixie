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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '30px',
                paddingBlockStart: '30px',
                paddingInlineStart: '30px',
                paddingBlockEnd: '30px',
                paddingInlineEnd: '30px',
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
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'Josefine Sans',
                        textAlign: 'center',
                        paddingBlockStart: '30px',
                        paddingInlineStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineEnd: '30px',
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
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#EF903A',
                                fontSize: '50px',
                                marginBlockEnd: '30px',
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
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBlockEnd: '24px',
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
                                display: 'flex',
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
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'Josefine Sans',
                        textAlign: 'center',
                        paddingBlockStart: '30px',
                        paddingInlineStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineEnd: '30px',
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
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#EF903A',
                                fontSize: '50px',
                                marginBlockEnd: '30px',
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
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBlockEnd: '24px',
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
                                display: 'flex',
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
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        backgroundColor: '#FFFFFF',
                        fontFamily: 'Josefine Sans',
                        textAlign: 'center',
                        paddingBlockStart: '30px',
                        paddingInlineStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineEnd: '30px',
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
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#EF903A',
                                fontSize: '50px',
                                marginBlockEnd: '30px',
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
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 'bold',
                                marginBlockEnd: '24px',
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
                                display: 'flex',
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