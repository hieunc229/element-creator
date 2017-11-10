import ElementCreator from '../ElementCreator';

const UniqueElements = {
    'checkbox': function () {
        return ElementCreator('input', null, {
            config: {
                type: 'checkbox'
            }
        });
    },
    'radio': function () {
        return ElementCreator('input', null, {
            config: {
                type: 'radio'
            }
        });
    }
}
export default UniqueElements;