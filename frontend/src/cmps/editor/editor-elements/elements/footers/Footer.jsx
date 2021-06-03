import { utilService } from '../../../../../service/util-service';

export function getFooter() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer',
        isContainer: true,
        prefs: {
            className: "footer-product"
        },
        childs: [
            {
                id: utilService.makeId(),
                cmpName: 'copyrights',
                type: 'span',
                role: 'childless',
                prefs: {
                    className: 'product-copyrights flex justify-center align-center'
                },
                txt: "© 2021 Pixie Tecnology",
            }

        ],
    })
}

