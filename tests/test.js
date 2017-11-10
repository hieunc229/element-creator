import assert  from 'assert';
import e from '../index.js';

describe("ElementCreator", function () {

    describe("Create element with e('div#div01.div__class01.div__class02[name=myDiv]')", function () {
        var element = e('div#div01.div__class01.div__class02[name=myDiv]');
        
        it("has tagName as 'DIV'", function () {
            assert.equal(element.tagName, 'DIV');
        })

        it("has id as 'div01'", function () {
            assert.equal(element.id, 'div01');
        })

        it("has className as 'div__class01 div__class02'", function () {
            assert.equal(element.className, 'div__class01 div__class02');
        })

        it("has 1 attribute 'name' as 'myDiv'", function () {
            assert.equal(element.getAttribute('name'), 'myDiv');
        })
    })
})
    
describe("ElementExtended", function () {

    document.body.innerHTML = "<div class='test__div'></div>";
    var testElement = e.wrap('.test__div');

    describe("Test find element with querySelector", function() {
        it("'div' class test__div appear on test document's body", function() {
            assert.equal(document.body.querySelector('.test__div').className, 'test__div');
        })
    })

    describe("Test find element with 'e.wrap'", function() {

        it("should find 'div' and has class 'test__div'", function() {
            assert.equal(testElement.className, 'test__div');
        })

        it("should has functions, i.e 'find'", function() {
            assert.equal(typeof testElement.find, 'function');
        })
    })
})
