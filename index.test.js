const fs = require("fs");

window.document.body.innerHTML = fs.readFileSync('./index.html');
test('should be html 5', () => {
    var node = window.document.doctype;
    var doctype_string = "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC"' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + ">";
    
    expect(window.document.doctype).not.toBeNull();
    expect(doctype_string).toBe('<!DOCTYPE html>')
});


test('should have an h1 with text CSS Color Markers', () => {
    expect(document.getElementsByTagName("h1").length).toBeGreaterThan(0);
    expect(document.getElementsByTagName("h1")[0].innerHTML).toEqual("CSS Color Markers");
});

test('should have 3 div with marker class', () => {
    expect(document.querySelectorAll('div.marker').length).toEqual(3);
});

test('should have 3 div with cap class', () => {
    const caps = document.getElementsByClassName('cap');
    if(caps.length > 0){
        for (let element of caps) {
            expect(element.parentNode.className).toEqual("marker");
        }
    }
    expect(caps.length).toEqual(3);
});

test('should have 3 div with sleeve class', () => {
    const sleeve = document.getElementsByClassName('sleeve');
    if(sleeve.length > 0){
        for (let element of sleeve) {
            expect(element.parentNode.className).toEqual("marker");
        }
    }
    expect(sleeve.length).toEqual(3);
});

test('should color red have correct styling', () => {
    // background: linear-gradient(rgb(122, 74, 14), rgb(245, 62, 113), rgb(162, 27, 27));
    // box-shadow: 0 0 20px 0 rgba(83, 14, 14, 0.8);
});