import { utilService } from '../../../../../service/util-service.js'

export function getStyleTextSection() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexFlow: 'column',
                flexWrap: 'wrap',
                width: '100%',
                minHeight: '50px',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                marginBlockStart: '32px',

            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    style: {
                        display: 'flex',
                        backgroundImage: 'url(http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622832495/mypics/rnyy788zgnuza2su11t6.gif)',
                        backgroundSize: 'cover',
                        height: '100px',
                        width: '100px'
                    }
                },
                txt: ''
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'text-div',
                prefs: {
                    className: "text-product-container"
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: "flex text-product",
                            style: {
                                width: '100%',
                                textAlign: 'center',
                                justifyContent: 'center',
                                fontSize: '58px',
                                fontWeight: '600',
                                fontFamily: 'DancingScript',
                                marginBlockBtart: '15px',
                            }
                        },
                        txt: `Who we are?`
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'text-div',
                prefs: {
                    className: "text-product-container"
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: "flex text-product",
                            style: {
                                width: '100%',
                                textAlign: 'center',
                                justifyContent: 'center',
                                paddingInline: '100px',
                                paddingBlockStart: '0px',
                                marginBlockStart: '15px',
                                fontWeight: '400',
                                fontFamily: 'Raleway',
                            }
                        },
                        txt: `Stylepont is a team of enthusiastic stylists, 
                        photographers, and make-up artists that will create a brand new total look for you! 
                        Classic or street style, casual or evening: 
                        we'll dress you up and make you up so that you are ready for the photoshoot of the year! 
                        Be stylish, be unique with Stylepont!`
                    }
                ]
            },
        ]
    }
    )
}