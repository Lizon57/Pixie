import { utilService } from '../../../../../service/util-service';

export function getHeader2() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#cccccc',
                paddingRight: '30px',
                paddingLeft: '30px',
                height: '75px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    style: {
                        backgroundImage: 'url("https://i.ibb.co/djbttL1/logo.png")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '60px',
                        width: '107px'
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
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            style: {
                                backgroundColor: '#cccccc',
                                fontSize: '30px',
                                fontFamily: 'inter',
                                fontWeight: 'bold',
                                paddingInlineEnd: '40px',
                            }
                        },
                        txt: 'Home'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            style: {
                                backgroundColor: '#cccccc',
                                fontSize: '30px',
                                fontFamily: 'inter',
                                fontWeight: 'bold',
                                paddingInlineEnd: '40px',
                            }
                        },
                        txt: 'Products'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            style: {
                                backgroundColor: '#cccccc',
                                fontSize: '30px',
                                fontFamily: 'inter',
                                fontWeight: 'bold',
                                paddingInlineEnd: '40px',
                            }
                        },
                        txt: 'About'
                    }
                ]
            }
        ]
    })
}