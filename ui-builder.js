let ui = {};

(function() {

  ui.get = function(id) {
    let elem = document.getElementById(id);
    addCustomMethods(elem);
    return elem;
  }

  ui.create = function(tag, id, className) {
    let elem = document.createElement(tag);
    if (id) elem.id = id;
    if (className) elem.className = className;
    addCustomMethods(elem);
    return elem;
  };

  function addCustomMethods(elem) {
    elem.add = function(child) { add(elem, child) };
    elem.addTo = function(parent) { add(parent, elem) };
    elem.addText = function(text) { addTextTo(elem, text) };
    elem.getComputed = function(style) { return getComputed(elem, style) };
  }

  function add(parent, child) {
    parent.appendChild(child);
  }

  function addTextTo(element, text) {
    let textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  function getComputed(elem, style) {
    return window.getComputedStyle(elem, null).getPropertyValue(style);
  }

})();
