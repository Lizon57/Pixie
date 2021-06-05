import { utilService } from '../../../../../service/util-service';
import heroImg from '../../../../../assets/img/svg-white-borders.svg';

export function getFlowerHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-hero',
            style: {
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundColor: '#FFB2DF',
                padding: '30px',
                display: 'flex',
                alignItems: 'center',
            }
        },
        childs: [
            {
                id: utilService.makeId(), //container
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-hero-container',
                    style: {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        gap: '15px',
                        width: '100%',
                        height: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(), //container
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                width: '40%',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622875450/mypics/ghivdhlwzsgbrcnbk05n.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                minWidth: '320px',
                                minHeight: '400px',
                            }
                        },
                    },
                    {
                        id: utilService.makeId(), //container
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            className: 'flower-hero-text',
                            style: {
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '24px',
                                alignItems: 'center',
                                fontFamily: 'Josefine Sans',
                                maxWidth: '500px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        fontSize: '64px',
                                        color: '#eeeeee',
                                    }
                                },
                                txt: 'Everybody Loves the Sunshine.'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        fontSize: '20px',
                                        color: '#53440c',
                                    }
                                },
                                txt: 'After you’ve finished your Friday shopping and had brunch, it’s well worth it to pass through the flower shop at the end of the market.'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        padding: '16px 32px',
                                        borderRadius: '30px',
                                        fontFamily: 'Raleway',
                                        fontSize: '18px',
                                        backgroundColor: '#ffc935',
                                        fontWeight: 'bold',
                                        border: 'none',
                                        color: '#53440c',
                                    }
                                },
                                txt: 'TAKE ME'
                            },
                        ]
                    }
                ]
            }
        ]
    })
}