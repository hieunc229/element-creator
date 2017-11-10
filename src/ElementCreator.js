import ElementExtended from './ElementExtended';
import { ElementParser, UniqueElements } from './utils';

function ElementCreator(elementName, children = null, options = null) {
    let { TAG, ATTRS, ID, CLASSES } = ElementParser(elementName);
    if (UniqueElements[TAG]) { return UniqueElements[TAG](); }

    let element = ElementExtended(document.createElement(TAG));
    if (CLASSES) { element.className = CLASSES }
    if (ID) { element.id = ID }
    if (ATTRS) { ATTRS.forEach(attr => element.setAttribute(attr[0], attr[1])) }
    
    element.append(children);

    if (!options) { return element; }
    let { on, config, attrs, data } = options;
    if (on) {
        Object.keys(on).forEach((eventName) => {
            element.on(eventName, on[eventName])
        })
    }

    if (config) {
        Object.assign(element, config)
    }

    if (attrs) {
        Object.keys(attrs).forEach(function (key) {
            element.setAttribute(key, attrs[key])
        })
    }
    if (data) { element.dataset = data; }

    return element;
}

export default ElementCreator;
