/**
 * Convert string to element creatable object.
 * @param {*} elStr: element string (i.e 'div#myElement.class__1[name=awesome-div]')
 */
export default function ElementParser(elStr) {

        let tagRegex   = /[#.\[]/mg, // define tag name regex
            classRegex = /[\.][a-zA-Z\-\_\d]*/gm, // define classes regex
            idRegex    = /[\#][a-zA-Z\-\_\d]*/gm,
            attrsRegex = /([a-zA-Z0-9/-]*=.*)/gm, // define attribute regex
            classes, ids, attrs;
            
        var _classes = '', _id = false, _attrs = [];

        // scan through and add attributes if existed
        if (attrs = elStr.match(attrsRegex)) {
            attrs[0].split(',').forEach((v, i) => {
                let attr = v.replace(/[\[\]]/mg, '').split(/^([^=]+)=/);
                if (attr.length > 1) {
                    _attrs.push([attr[1], attr[2]]);
                    elStr = elStr.replace(v, '');
                }
            })
        }
        // elStr.split(attrsRegex).forEach(v => {
        //     let attr = v.replace(/[\[\]]/mg, '').split(/^([^=]+)=/);
        //     if (attr.length > 1) {
        //         _attrs.push([attr[1], attr[2]]);
        //         elStr = elStr.replace(v, '');
        //     }
        // })
    
        // scan through and add id or classes if existed
        if (classes = elStr.match(classRegex)) {
            classes.forEach((v, i) => {
                _classes += v.replace('.', ' ');
            })
        }
    
        if (ids = elStr.match(idRegex)) {
            ids.forEach((id) => {
                _id = id.replace('#', '');
            })
        }
    
        return {
            ID: _id,
            CLASSES: _classes.replace(' ', ''),
            ATTRS: _attrs.length ? _attrs : false,
            TAG: elStr.split(tagRegex).shift() || 'div'
        };
    }