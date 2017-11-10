var e = require('./index.js');
var assert = require('assert');

describe("ElementCreator as e", function () {
    describe('Create element', function () {
        it("should create 'div' element", function () {
            let element = e('div')
                , tagName = element.tagName;
            assert.equal(tagName, 'DIV');
        })
    })
})
