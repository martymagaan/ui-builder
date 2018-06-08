let ui = {};

(function() {

  ui.init = init;
  ui.create = create;
  ui.get = get;

  function init() {
    ui.root = create('div', 'app-root');
    document.body.insertBefore(ui.root, document.body.firstChild);
  }

  function add(parent, child) {
    parent.appendChild(child);
  }

  function addCustomMethods(elem) {
    elem.add = function (child) { add(elem, child) };
    elem.addTo = function(parent) { add(parent, elem) };
    elem.addText = function(text) { addTextTo(elem, text) };
    elem.create = function(tag, id, className) { return create(tag, id, className, elem) };
    elem.getComputed = function(style) { return getComputed(elem, style) };
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
    if (parent) elem.addTo(parent);
    return elem;
  }

  function get(id) {
    let elem = document.getElementById(id);
    addCustomMethods(elem);
    return elem;
  }

  function getComputed(elem, style) {
    return window.getComputedStyle(elem, null).getPropertyValue(style);
  }

})();
