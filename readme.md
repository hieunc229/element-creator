
# element-creator [![Build Status](https://travis-ci.org/hieunc229/element-creator.svg?branch=master)](https://travis-ci.org/hieunc229/element-creator) [![size](http://img.badgesize.io/https://unpkg.com/element-creator@1.0.2/build/element-creator.min.js?max=100000&softmax=200000)](https://unpkg.com/element-creator@1.0.2/build/element-creator.min.js) [![npm version](https://badge.fury.io/js/element-creator.svg)](https://badge.fury.io/js/element-creator) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A library that helps to create HTML elements (virtual dom) easily. Inspired by MithrilJs framework.

## Installation

element-creator is available on NPM and as a Javascript library.

Install on NPM

```ssh
npm install element-creator
```

Or include on html file on unpkg
```html

<script  type="text/javascript" src="https://unpkg.com/element-creator@1.0.2/build/element-creator.min.js"></script>
```

## How to use?

```javascript
e(elementString, children, options)
```
Where:

- **elementString** is a string that specify the element parameters creation with following pattern:

`{elementType}{(*)elementId}{(*)elementClasses}{(*)elementAttributes}`

(*) is optional

| Parameters        | Default | Description                           | Example |
|-------------------|---------|---------------------------------------|---------|
| elementType       | div     | Type of element or element's tag type | `p` or `h1`. Use default incase left empty |
| elementId         |         | Element's id                          | `#firstParagraph` |
| elementClasses    |         | Element classes                       | `.class__1` or multiple classes `.class__1.class_2` |
| elementAtrributes |         | Element attributes                    | `[name=title]` or multiple attributes `[name=title,ref=titleRef]`|

- **children** is text node or html elements that stay inside the element.
- **options** os other configuration including:

  - on: add event listener
  - attrs: element's attributes
  - data: element's data

## Examples:

A one page content example located at `build/index.html`. Or a quick demo below

```javascript
// using node with es6, otherwise var e = require('element-creator');
import e from 'element-creator';

var myDiv = e('div#myElement.class__1[name=awesome-div]', 'My awesome div', {
    on: { 'click': function(e) {
        alert('You have clicked on My awesome div');
    }}
})
```

The variable `myDiv` above generates `div` html element with `click` event that prop an alert message.
```html
<div id="myElement" class="class__1" name="awesome-div">My awesome div</div>
```
