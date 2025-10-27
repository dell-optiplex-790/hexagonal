export function preprocess(content: vDOM$Node) {
    var c: vDOM$Node = content;

    if(`/${c[0]}` != c[3]) {
        throw new Error('Invalid closing tag!')
    }

    c[2].forEach(function(e) {
        if(typeof e == 'function') {
            let vNode: vDOM$NodeList = [];
            e(vNode); // process
            let vNodeList: vDOM$NodeList = preprocess(["virtual-root",{},vNode,"/virtual-root"])[2];
            c[2].push.apply(c[2], vNodeList);
        } else if(typeof e == 'object') { // array is object, close enough
            preprocess(<vDOM$Node>e);
        }
    });
    c[2] = c[2].filter(function(e) {
        return ['string', 'object'].indexOf(typeof e) != -1;
    });
    return c;
}
  