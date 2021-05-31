import { utilService } from '../../../../service/util-service.js'

export function getVideo(src) {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'video',
        isContainer: true,
        prefs: {
            className: "video-product-container"
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'iframe',
                role: 'videos',
                prefs: {
                    className: "video-product",
                    src: src
                },
                txt: '',
            }
        ],
    })
}
