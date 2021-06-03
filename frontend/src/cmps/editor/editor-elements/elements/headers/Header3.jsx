import { utilService } from '../../../../../service/util-service';

export function getHeader3() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
            }
        },
        childs: [{
            id: utilService.makeId(),
            type: 'div',
            role: 'header-part-1',
            isContainer: true,
            prefs: {
                style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    backgroundColor: '#1a1a1a',
                    paddingInlineStart: '50px',
                    paddingInlineEnd: '50px',
                }
            },
            childs: [{
                id: utilService.makeId(),
                type: 'div',
                role: 'left-side',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }
                },
                childs: [{
                    id: utilService.makeId(),
                    type: 'div',
                    role: 'img',
                    prefs: {
                        style: {
                            display: 'flex',
                            backgroundImage: 'url("https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png")',
                            backgroundSize: 'contain',
                            height: '75px',
                            width: '75px'
                        }
                    },
                },
                {
                    id: utilService.makeId(),
                    type: 'button',
                    role: 'childeless',
                    prefs: {
                        style: {
                            display: 'flex',
                            backgroundColor: '#1a1a1a',
                            color: '#ffffcc',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            paddingInlineStart: '15px',
                            paddingBlockStart: '15px',
                            paddingBlockEnd: '15px',
                        }
                    },
                    txt: 'Videos'
                },
                {
                    id: utilService.makeId(),
                    type: 'button',
                    role: 'childeless',
                    prefs: {
                        style: {
                            display: 'flex',
                            color: '#ffffcc',
                            backgroundColor: '#1a1a1a',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            paddingInlineStart: '15px',
                            paddingBlockStart: '15px',
                            paddingBlockEnd: '15px',
                        }
                    },
                    txt: 'News'
                },
                {
                    id: utilService.makeId(),
                    type: 'button',
                    role: 'childeless',
                    prefs: {
                        style: {
                            display: 'flex',
                            color: '#ffffcc',
                            backgroundColor: '#1a1a1a',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            paddingInlineStart: '15px',
                            paddingBlockStart: '15px',
                            paddingBlockEnd: '15px',
                        }
                    },
                    txt: 'Shop'
                },
                {
                    id: utilService.makeId(),
                    type: 'button',
                    role: 'childeless',
                    prefs: {
                        style: {
                            display: 'flex',
                            color: '#ffffcc',
                            backgroundColor: '#1a1a1a',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            paddingInlineStart: '15px',
                            paddingBlockStart: '15px',
                            paddingBlockEnd: '15px',
                        }
                    },
                    txt: 'Fixtures'
                }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'right-side',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        alignItems: 'center'
                    }
                },
                childs: [{
                    id: utilService.makeId(),
                    type: 'div',
                    role: 'img',
                    prefs: {
                        style: {
                            display: 'flex',
                            backgroundImage: 'url("https://i.ibb.co/J5QsfdW/profile-121261.png")',
                            backgroundSize: '75%',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#1a1a1a',
                            height: '25px',
                            width: '25px'
                        }
                    }
                },
                {
                    id: utilService.makeId(),
                    type: 'button',
                    role: 'childeless',
                    prefs: {
                        style: {
                            display: 'flex',
                            backgroundColor: '#1a1a1a',
                            color: '#ffffcc',
                            fontWeight: 'bold',
                            letterSpacing: '2px',
                            paddingInlineStart: '5px',
                            paddingInlineEnd: '15px',
                        }
                    },
                    txt: 'Welcome Pixie!'
                },
                {
                    id: utilService.makeId(),
                    type: 'span',
                    role: 'childless',
                    prefs: {
                        style: {
                            display: 'flex',
                            backgroundColor: '#c70101',
                            borderRadius: '5px',
                            color: '#ffffff',
                            fontSize: '14px',
                            fontFamily: 'JetBrainsMono',
                            fontStyle: 'italic',
                            paddingInlineStart: '15px',
                            paddingInlineEnd: '15px',
                            paddingBlockStart: '5px',
                            paddingBlockEnd: '5px'
                        }
                    },
                    txt: 'Powered by HCL'
                }],
            }
            ]
        },


        {
            id: utilService.makeId(),
            type: 'header',
            role: 'header-part-2',
            isContainer: true,
            prefs: {
                style: {
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg")',
                    backgroundPosition: 'right bottom',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#c70101'
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
                            color: '#ffffcc',
                            fontSize: '18px',
                            fontFamily: 'inter',
                            paddingInlineStart: '10px',
                            paddingInlineEnd: '10px',
                            paddingBlockStart: '10px',
                            paddingBlockEnd: '10px',
                        }
                    },
                    txt: 'Main page'
                }
            ]
        }

        ]
    })
}