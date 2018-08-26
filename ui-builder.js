let ui = {};

(function() {

  ui.init = init;

  function init() {
    ui.root = create('div', 'app-root');
    document.body.insertBefore(ui.root, document.body.firstChild);
    ui.root.add = function(child) { add(ui.root, child) };
    ui.root.addText = function(text) { addTextTo(ui.root, text) };
    ui.root.create = function(tag, id, className) {
      return create(tag, id, className, ui.root)
    };
  }

  function create(tag, id, className, parent) {
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

  function addCustomMethods(elem) {
    elem.create = function(tag, id, className) {
      return create(tag, id, className, elem)
    };
    elem.addText = function(text) { addTextTo(elem, text) };
  }

  function addTextTo(element, text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  ui.get = function (id) {
    return document.getElementById(id);
  }

})();
