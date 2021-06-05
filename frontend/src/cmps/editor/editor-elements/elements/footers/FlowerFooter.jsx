import { utilService } from '../../../../../service/util-service';

export function getFlowerFooter() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer',
        isContainer: true,
        prefs: {
            style: {
                backgroundColor: '#332a08',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: '10px 30px',
                fontFamily: 'Raleway',
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
                        flexDirection: 'column',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontWeight: 'bold',
                                borderBottom: '1px solid #EEEEEE',
                                marginBottom: '10px',
                                padding: '10px 15px',
                            }
                        },
                        txt: 'FLOWERTIN'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                padding: '10px 15px',
                            }
                        },
                        txt: 'FLOWERS'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                padding: '10px 15px',
                            }
                        },
                        txt: 'DELIVERIES'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                padding: '10px 15px',
                            }
                        },
                        txt: 'SHOP'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                padding: '10px 15px',
                            }
                        },
                        txt: 'FAQS'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        fontSize: '10px',
                    }
                },
                txt: '© FLOWERTIN'
            },
        ]
    })
}