import { utilService } from '../../../../../service/util-service';

export function getFlowerHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                backgroundColor: '#FFB2DF',
                padding: '15px 30px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '30px',
                color: '#eeeeee',
                fontFamily: 'Raleway',
                fontWeight: 'bold',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '32px',
                    }
                },
                txt: 'FLOWERTIN'
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'nav-desktop',
                            style: {
                                padding: '5px 30px',
                                color: '#53440c',
                            }
                        },
                        txt: 'FLOWERS'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'nav-desktop',
                            style: {
                                padding: '5px 30px',
                                color: '#53440c',
                            }
                        },
                        txt: 'DELIVERIES'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'nav-desktop',
                            style: {
                                padding: '5px 30px',
                                color: '#53440c',
                            }
                        },
                        txt: 'SHOP'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'nav-desktop',
                            style: {
                                padding: '5px 30px',
                                color: '#53440c',
                            }
                        },
                        txt: 'FAQS'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fas hamburger-icon',
                            style: {
                                padding: '5px 30px',
                                color: '#53440c',
                            }
                        },
                        txt: ''
                    },
                ]
            },
        ]
    })
}