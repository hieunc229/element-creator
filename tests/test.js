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

    document.body.innerHTML = "<div class='test__div'></div>";
    describe("Test element wrapper with 'e.wrap'", function() {
        
        it('wrap .test__div element within document\'s body', function() {
            let testElement = e.wrap('.test__div');
            assert.equal(testElement.className, 'test__div');
        })
    })
})
