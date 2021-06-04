import { utilService } from '../../../../../service/util-service'

export function getMazeHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'maiz-hero',
            style: {
                height: '800px',
                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622734799/mypics/o8c98nc0dms1ihyu1jmg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                lineFeight: '1.6',
                fontFamily: 'Montserrat',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'maiz-hero-container',
                    style: {
                        margin: 'auto',
                        height: '100%',
                        width: '80%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            className: 'container12',
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                height: '350px',
                                width: '350px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                className: "maiz-hero-span",
                                prefs: {
                                    style: {
                                        fontSize: '42px',
                                        color: '#FBA91A',
                                        fontWeight: 900,
                                    }
                                },
                                txt: '#STARTWITHWHY'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        color: '#EEEEEE',
                                        fontWeight: 900,
                                    }
                                },
                                txt: 'Because Mcdonalds speed and Indigo Deli quality is a thing – its called fast casual.'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        color: '#EEEEEE',
                                    }
                                },
                                txt: 'Fast casual is fast food reinvented. Fresh ingredients, actual cooking, super-quick live preparation, and easy on the calories and your wallet.'
                            },
                        ]
                    }
                ]
            }
        ]
    })
}