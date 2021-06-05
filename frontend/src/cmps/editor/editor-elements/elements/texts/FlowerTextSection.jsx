import { utilService } from '../../../../../service/util-service';

export function getFlowerTextSection() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-text-section',
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                backgroundColor: ' #FFFFFF',
                gap: '15px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-text-section-container',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        width: '100%',
                        gap: '30px',
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
                                fontFamily: 'Josefine Sans',
                                color: '#EF903A',
                            }
                        },
                        txt: 'Variety of flowers, at a phone call reach.'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                fontSize: '20px',
                                fontFamily: 'Montserrat',
                            }
                        },
                        txt: 'Flowers and plants are always a great gift for those you hold dear, or even yourself. Whether you\'re shopping for birthday flowers for your mom or you want to surprise your husband at the office with a lush bonsai plant, we\'ve got you covered.'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    className: 'flower-text-section-img',
                    style: {
                        width: '100%',
                        height: '400px',
                        backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622882648/mypics/tphkq3tozqklg261ku8x.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        borderRadius: '5px',
                    }
                },
            }
        ]
    })
}