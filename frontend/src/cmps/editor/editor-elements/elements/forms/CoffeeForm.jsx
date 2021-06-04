import { utilService } from '../../../../../service/util-service.js'

export function getCoffeeForm() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            style: {
                padding: '30px',
                backgroundColor: '#eeeeee',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    style: {
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '600px',
                        margin: 'auto',
                        gap: '30px',
                        backgroundColor: '#fbf5ef',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childsless',
                                prefs: {
                                    style: {
                                        fontSize: '10px',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'bold',
                                    }
                                },
                                txt: 'SUBSCRIBE TO'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childsless',
                                prefs: {
                                    style: {
                                        fontSize: '32px',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'bold',
                                    }
                                },
                                txt: 'THE COFFEE GURU'
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontFamily: 'Mulish',
                                color: '#6A6B6C',
                            }
                        },
                        txt: 'Stay connected and stay informed with The Coffee Guru. Get the freshest coffee content straight to your inbox without having to miss a thing!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'input',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontFamily: 'Mulish',
                                color: '#6a6b6c',
                                width: '100%',
                                padding: '10px',
                                backgroundColor: 'unset',
                                border: 'none',
                                borderBottom: '1px solid #6a6b6c',
                                outline: 'none',
                            }
                        },
                        placeholder: 'NAME'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'input',
                        role: 'childsless',
                        prefs: {
                            style: {
                                fontFamily: 'Mulish',
                                color: '#6a6b6c',
                                width: '100%',
                                padding: '10px',
                                backgroundColor: 'unset',
                                border: 'none',
                                borderBottom: '1px solid #6a6b6c',
                                outline: 'none',
                            }
                        },
                        placeholder: 'EMAIL'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childsless',
                        prefs: {
                            style: {
                                padding: '15px 20px',
                                borderRadius: '30px',
                                fontFamily: 'Montserrat',
                                border: 'none',
                                backgroundColor: '#A67D69',
                                color: '#EEEEEE',
                            }
                        },
                        txt: 'SIGN ME UP'
                    },
                ]
            }
        ]
    })
}

