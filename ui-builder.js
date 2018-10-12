let ui = {};

(function() {

  ui.createRoot = function(id = 'app-root') {
    const root = create(null, 'div', id);
    document.body.insertBefore(root, document.body.firstChild);
    return root;
  }

  ui.create = function(tag, id, className) {
    return create(null, tag, id, className);
  };

  function create(parent, tag, id, className) {
    const elem = document.createElement(tag);
    if (id) elem.id = id;
    if (className) elem.className = className;
    if (parent) parent.appendChild(elem);
    addCustomMethods(elem);
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
    elem.addText = function(text) {
      addText(text, elem);
    };
    elem.addBreak = function() {
      addBreak(elem);
    };
  }

  ui.get = function(id) {
    const elem = document.getElementById(id);
    addCustomMethods(elem);
    return elem;
  }

})();
