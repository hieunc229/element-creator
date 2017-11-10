import BrowserUtils from './BrowserUtils';

/**
 * Event names used for mobile events
 */
const _elementsEventNames = {
    'click': ['click', 'touchstart'],
    'scroll': ['scroll', 'touchmove']
}

function ElementEvents(eventName) {
    return BrowserUtils.IsOnMobile && _elementsEventNames[eventName] ? _elementsEventNames[eventName] : eventName;
}

export default ElementEvents;
