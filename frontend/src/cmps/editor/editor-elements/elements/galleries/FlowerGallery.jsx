import { utilService } from '../../../../../service/util-service';

export function getFlowerGallery() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-gallery',
            style: {
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-gallery-col',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '120vw',
                        gap: '10px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                height: '33.3%',
                                borderRadius: '5px',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622896592/mypics/xsknmmwcxaibl4fuxdfj.jpg")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                            }
                        },
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                height: '66.6%',
                                borderRadius: '5px',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622896572/mypics/rawspbnxv91imayw3voj.jpg")',
                            }
                        },
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-gallery-col',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '120vw',
                        gap: '10px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                height: '100%',
                                borderRadius: '5px',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622896604/mypics/mzckdgbrrrhnjqwvvawr.jpg")',
                            }
                        },
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-gallery-col',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '120vw',
                        gap: '10px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                height: '66.6%',
                                borderRadius: '5px',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622896662/mypics/hhv95tfr3rugrlwrhxpl.jpg")',
                            }
                        },
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                height: '33.3%',
                                borderRadius: '5px',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundImage: 'url("http://res.cloudinary.com/dxbnzz0s3/image/upload/v1622896615/mypics/jej7wrurmrikm9cwbgef.jpg")',
                            }
                        },
                    },
                ]
            }
        ],
    })
}