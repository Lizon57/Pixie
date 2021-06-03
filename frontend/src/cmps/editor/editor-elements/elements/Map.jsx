import { utilService } from '../../../../service/util-service';

export function getMap() {
    return {
        id: utilService.makeId(),
        type: 'div',
        role: 'map',
        prefs: {
            className: 'product-map',
            style: {
                margin: '50px auto',
                width: '50vw',
                height: '40vh'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'iframe',
                role: 'childless',
                prefs: {
                    style: {
                        width: '100%',
                        height: '100%',
                    },
                    src: `https://maps.google.com/maps?q=Tel-Aviv&z=15&output=embed`
                },
            }
        ]
    };
};
