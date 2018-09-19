let ui = {};

(function() {

  ui.init = init;

  function init() {
    ui = create(null, 'div', 'app-root');
    document.body.insertBefore(ui, document.body.firstChild);
    ui.init = init;
    ui.get = get;
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
    elem.addText = function(text) {
      addText(text, elem);
    };
    elem.addBreak = function() {
      addBreak(elem);
    };
  }

  function get (id) {
    return document.getElementById(id);
  }

})();
