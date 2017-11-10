var e = require('./index.js');
var test = require('tape');

test("should create 'div' element", function(assert) {
    let element = e('div')
    ,   tagName = element.tagName;
    assert.equal(tagName, 'DIV');
    assert.end();
})
