// Export functions
export const editorService = {
    getFieldsWithPx,
    getFieldsWithDebounce,
    getNewElement,
    stripFromPx
};

function getFieldsWithPx() {
    return [
        'fontSize', 'letterSpacing', 'lineHeight',
        'borderRadius', 'height', 'width',
        'marginBlockStart', 'marginBlockEnd', 'marginInlineStart', 'marginInlineEnd',
        'paddingBlockStart', 'paddingBlockEnd', 'paddingInlineStart', 'paddingInlineEnd'];
}

function getFieldsWithDebounce() {
    return ['color', 'backgroundColor']
}

function getNewElement(element, changedField, newValue) {
    if (changedField === 'txt') element = { ...element, [changedField]: newValue };
    else {
        if (getFieldsWithPx().includes(changedField)) newValue = newValue + 'px';
        element = { ...element, prefs: { ...element.prefs, style: { ...element.prefs.style, [changedField]: newValue } } };
    };

    return element;
}

function stripFromPx(prop) {
    return parseInt(prop.replace('px', ''));
}