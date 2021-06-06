import { utilService } from '../../../../../service/util-service';

export function getFlowerHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
                alignItems: 'center',
                backgroundColor: '#FFB2DF',
                fontFamily: 'Raleway',
                fontWeight: 'bold',
                paddingBlockStart: '15px',
                paddingInlineStart: '30px',
                paddingBlockEnd: '15px',
                paddingInlineEnd: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        fontSize: '32px',
                        color: '#eeeeee',
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
                                display: 'flex',
                                paddingBlockStart: '5px',
                                paddingInlineStart: '30px',
                                paddingBlockEnd: '5px',
                                paddingInlineEnd: '30px',
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
                                display: 'flex',
                                paddingBlockStart: '5px',
                                paddingInlineStart: '30px',
                                paddingBlockEnd: '5px',
                                paddingInlineEnd: '30px',
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
                                display: 'flex',
                                paddingBlockStart: '5px',
                                paddingInlineStart: '30px',
                                paddingBlockEnd: '5px',
                                paddingInlineEnd: '30px',
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
                                display: 'flex',
                                paddingBlockStart: '5px',
                                paddingInlineStart: '30px',
                                paddingBlockEnd: '5px',
                                paddingInlineEnd: '30px',
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
                                cursor: 'pointer',
                                display: 'flex',
                                paddingBlockStart: '5px',
                                paddingInlineStart: '30px',
                                paddingBlockEnd: '5px',
                                paddingInlineEnd: '30px',
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