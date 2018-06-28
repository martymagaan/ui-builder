let ui = {};

(function() {

  ui.init = init;

  function init() {
    let root = create('div', 'app-root');
    document.body.insertBefore(root, document.body.firstChild);
    ui.add = function (child) { add(root, child) };
    ui.addText = function(text) { addTextTo(root, text) };
    ui.create = function(tag, id, className) { return create(tag, id, className, root) };
    ui.get = get;
  }

  function add(parent, child) {
    parent.appendChild(child);
  }

  function addCustomMethods(elem) {
    elem.ui = {};
    elem.ui.add = function (child) { add(elem, child) };
    elem.ui.addTo = function(parent) { add(parent, elem) };
    elem.ui.addText = function(text) { addTextTo(elem, text) };
    elem.ui.create = function(tag, id, className) { return create(tag, id, className, elem) };
  }

  function addTextTo(element, text) {
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  function create(tag, id, className, parent) {
    let elem = document.createElement(tag);
    if (id) elem.id = id;
    if (className) elem.className = className;
    addCustomMethods(elem);
    if (parent) elem.ui.addTo(parent);
    return elem;
  }

  function get(id) {
    return document.getElementById(id);
  }

})();
