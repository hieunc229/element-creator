// Build for browser
import ElementCreator from './src/ElementCreator';
import ElementExtended from './src/ElementExtended';

let e = ElementCreator;
e.wrap = ElementExtended;

window.e = e;