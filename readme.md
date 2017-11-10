# Element Creator

A javascript library that helps creating html elements easily

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
| elementType       | div     | Type of element or element's tag type | `p` or `h1` |
| elementId         |         | Element's id                          | `#firstParagraph` |
| elementClasses    |         | Element classes                       | `.class__1` or multiple classes `.class__1.class_2` |
| elementAtrributes |         | Element attributes                    | `[name=title]` or multiple attributes `[name=title,ref=titleRef]`|

- **children** is text node or html elements that stay inside the element.
- **options** os other configuration including:

  - on: add event listener
  - attrs: element's attributes
  - data: element's data

## Example

```javascript
import e from 'element-creator';

var myDiv = e('div#myElement.class__1[name=awesome-div]', 'My awesome div', {
    on: {
        'click': function(e) {
            alert('You have clicked on My awesome div');
        }
    }
})
```


The variable `myDiv` above generates 'div' html element with `click` event that prop an alert message.
```html
<div id="myElement" class="class__1" name="awesome-div" >My awesome div</div>
```
