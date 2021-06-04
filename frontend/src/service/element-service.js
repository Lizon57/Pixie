import { elements } from '../cmps/editor/editor-elements/elements'

// Export functions
export const elementService = {
    getElement,
    removeElementById,
    editElement,
    addElement,
    reorderElement,
}

function getElement(type, src = null) {
    switch (type) {
        case 'box':
            return elements.getBox()
        case 'header1':
            return elements.getHeader1()
        case 'header2':
            return elements.getHeader2()
        case 'sportsHeader':
            return elements.getSportsHeader()
        case 'header4':
            return elements.getHeader4()
        case 'map':
            return elements.getMap()
        case 'youtube':
            return elements.getVideo(src)
        case 'sportsHero':
            return elements.getSportsHero()
        case 'img':
            return elements.getImg(src)
        case 'text':
            return elements.getText()
        case 'navBar':
            return elements.getNavbar()
        case 'footer':
            return elements.getFooter()
        case 'footer1':
            return elements.getFooter1()
        case 'cards':
            return elements.getCards()
        case 'cards1':
            return elements.getCards1()
        case 'cards2':
            return elements.getCards2()
        case 'fullWidthCardImgFirst':
            return elements.getFullWidthCardImgFirst()
        case 'fullWidthCardTextFirst':
            return elements.getFullWidthCardTextFirst()
        case 'hero1':
            return elements.getHero1()
        case 'hero2':
            return elements.getHero2()
        case 'MaizHero':
            return elements.getMazeHero()
        case 'MaizHeader':
            return elements.getMaizHeader()
        case 'MaizTextSection':
            return elements.getMaizTextSection()
        case 'MaizCards':
            return elements.getMaizCards()
        case 'MaizFooter':
            return elements.getMaizFooter()
        case 'CoffeeHeader':
            return elements.getCoffeeHeader()
        case 'CoffeeHero':
            return elements.getCoffeeHero()
        case 'CoffeeCards':
            return elements.getCoffeeCards()
        case 'CoffeeTextSection':
            return elements.getCoffeeTextSection()
        case 'CoffeeForm':
            return elements.getCoffeeForm()
        case 'CoffeeFooter':
            return elements.getCoffeeFooter()
        case 'StyleHero':
            return elements.getStyleHero()
        case 'StyleTextSection':
            return elements.getStyleTextSection()
        default: return;
    }
}

// REMOVE DONE

function removeElementById(data, elementId) {

    findTarget(data, elementId)

    return data;

    function findTarget(data, elementId) {
        if (!data.childs) return;
        const elementIdx = data.childs.findIndex(child => child.id === elementId);
        if (elementIdx !== -1) {
            data.childs.splice(elementIdx, 1);
            return
        } else {
            data.childs.forEach(child => findTarget(child, elementId));
        }
    }
}

// EDIT DONE

function editElement(data, elementId, newElement) {

    findTarget(data, elementId, newElement)

    return data;

    function findTarget(data, elementId, newElement) {
        if (!data.childs) return;
        const elementIdx = data.childs.findIndex(child => child.id === elementId);
        if (elementIdx !== -1) {
            data.childs.splice(elementIdx, 1, newElement);
            return
        } else {
            data.childs.forEach(child => findTarget(child, elementId, newElement));
        }
    }
}

//ADD ELEMENT

function addElement(data, elementId, elementType, src = null) {

    const newElement = getElement(elementType, src);

    findTarget(data, elementId, newElement);

    return data;

    function findTarget(data, elementId, newElement) {
        if (!data.childs) return;
        const parentIdx = data.childs.findIndex(child => child.id === elementId);
        if (parentIdx !== -1) {
            data.childs[parentIdx].childs.push(newElement);
            return;
        } else {
            data.childs.forEach(child => findTarget(child, elementId, newElement));
        }
    }
}

// UP / DOWN

function reorderElement(data, elementId, val) {

    findTarget(data, elementId, val)

    return data;

    function findTarget(data, elementId, val) {
        if (!data.childs) return;
        const elementIdx = data.childs.findIndex(child => child.id === elementId);
        if ((val === -1 && elementIdx === 0) || (val === 1 && elementIdx === data.childs.length - 1)) return;
        if (elementIdx !== -1) {
            [data.childs[elementIdx], data.childs[elementIdx + val]] = [data.childs[elementIdx + val], data.childs[elementIdx]]
            return
        } else {
            data.childs.forEach(child => findTarget(child, elementId, val));
        }
    }
}