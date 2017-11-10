import { ElementEvents } from './utils';
import { ElementScrollTo } from './effects';

/**
 * Turn a HTMLElement object into a Element object
 * @param selector: element selector, use to select HTMLElement
 * @param isMultiple: options to select multiple HTMLElements with selector above
 */
const ElementExtended = (selector, isMultiple = false) => {

    let htmlElement;

    switch (typeof (selector)) {
        case 'string':
            htmlElement = isMultiple ? document.querySelectorAll(selector) : document.querySelector(selector);
            break;
        case 'object':
            htmlElement = selector;
            break;
    }

    if (!htmlElement) { return; };

    let ElementObject = {
        append: (content) => {
            if (!content) { return; }

            let childElement;

            switch (typeof (content)) {
                case "object":
                    if (Array.isArray(content)) {
                        content.forEach(function (child) {
                            htmlElement.append(child)
                        });
                        return;
                    } else {
                        childElement = content;
                    }
                    break;
                case "number":
                case "string":
                    childElement = document.createTextNode(content)
                    break;
            }
            htmlElement.appendChild(childElement)
        },

        // Find a child within element
        find: (selector) => {
            let _dom = htmlElement.querySelector(selector);
            return ElementExtended(_dom);
        },

        // Find children within element
        all: (selector) => {
            let _doms = htmlElement.querySelectorAll(selector);
            return _doms;
        },

        parent: () => {
            return ElementExtended(htmlElement.parent);
        },

        /* CLASSES */
        addClass: (className) => { htmlElement.classList.add(className); },

        removeClass: (className) => { htmlElement.classList.remove(className); },

        toggleClass: (className) => { htmlElement.classList.toggle(className); },

        containClass: (className) => { return htmlElement.classList.contains(className); },

        data: (name, value) => {
            if (value) {
                htmlElement.dataset[name] = value;
            } else {
                return htmlElement.dataset[name];
            }
        },

        on: (eventName, callback) => {
            if (eventName == 'touchstart') {
                var touchmoved = false;
                htmlElement.addEventListener('touchend', () => {
                    if (!touchmoved) {
                        callback()
                    }
                })
                htmlElement.addEventListener('touchmove', () => {
                    touchmoved = true;
                })
            } else {
                htmlElement.addEventListener(ElementEvents(eventName), callback)
            };
        },

        val: (input) => {
            console.log(input)
            switch (htmlElement.tagName) {
                case 'INPUT':
                case 'TEXTAREA':
                    if (input) {
                        htmlElement.value = input;
                        break;
                    } else {
                        return htmlElement.value;
                    }
                default:
                    if (input) {
                        htmlElement.innerText = input;
                        break;
                    } else {
                        return htmlElement.innerText;
                    }
            }
        },

        clone: () => {
            let cloneDiv = ElementExtended(document.createElement('div'));
            cloneDiv.val(htmlElement.innerHTML)
            return cloneDiv;
        },

        scrollIntoView: (padding) => {
            var padding = padding || 10,
                targetPosition = ElementScrollTo.documentVerticalScrollPosition() + ElementScrollTo.elementVerticalClientPosition(this) - padding,
                currentPosition = ElementScrollTo.documentVerticalScrollPosition(),
                maximumScrollPosition = ElementScrollTo.documentMaximumScrollPosition();
            if (targetPosition > maximumScrollPosition)
                targetPosition = maximumScrollPosition;
            ElementScrollTo.scrollVerticalTickToPosition(currentPosition, targetPosition);
        },

        prepend: (element) => {
            htmlElement.insertBefore(element, htmlElement.firstElementChild);
        },

        appendChildren: (elements) => {
            function appendChild(childEl) {
                htmlElement.append(childEl);
            }
            if (elements.forEach) {
                elements.forEach(appendChild)
            } else {
                [].forEach.call(elements, appendChild)
            }
        },

        beat: () => {
            htmlElement.classList.add('effect--beat');
            setTimeout((e) => {
                htmlElement.classList.remove('effect--beat');
            }, 1000)
        }
    }

    Object.assign(htmlElement, ElementObject);
    return htmlElement;
};

export default ElementExtended;