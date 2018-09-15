let ui = {};

(function() {

  ui.init = init;

  function init() {
    ui.root = create(null, 'div', 'app-root');
    document.body.insertBefore(ui.root, document.body.firstChild);
  }

  function create(parent, tag, id, className) {
    const elem = document.createElement(tag);
    if (id) elem.id = id;
    if (className) elem.className = className;
    if (parent) add(parent, elem);
    addCustomMethods(elem);
    return elem;
  }

  function add(parent, child) {
    parent.appendChild(child);
  }

  function createImg(parent, src, alt, id, className) {
    const elem = create(parent, 'img', id, className);
    elem.src = src;
    if (alt) elem.alt = alt;
    return elem;
  }

  function addText(text, element) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  function addBreak(parent) {
    const br = document.createElement('br');
    parent.appendChild(br);
  }

  function addCustomMethods(elem) {
    elem.create = function(tag, id, className) {
      return create(elem, tag, id, className);
    };
    elem.createImg = function(src, alt, id, className) {
      return createImg(elem, src, alt, id, className);
    };
    elem.addText = function(text) {
      addText(text, elem);
    };
    elem.addBreak = function() {
      addBreak(elem);
    };
  }

  ui.get = function (id) {
    return document.getElementById(id);
  }

})();
