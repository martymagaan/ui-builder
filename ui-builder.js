var app = {};

(function() {

  app.load = function() {
    for (let i = 0; i < arguments.length; i++)
      loadScript(arguments[i]);
  }

  app.run = function() {
    var scripts = arguments;
    window.onload = function() {
      for (let i = 0; i < scripts.length; i++)
        loadScript(scripts[i]);
    };
  }

  app.get = function(id) {
    var elem = document.getElementById(id);
    addCustomMethods(elem);
    return elem;
  }

  app.create = function(tag, id, className) {
    var elem = document.createElement(tag);
    if (id) elem.id = id;
    if (className) elem.className = className;
    addCustomMethods(elem);
    return elem;
  };

  function loadScript(script) {
    var scriptElem = app.create('script');
    scriptElem.src = script;
    scriptElem.addTo(document.body);
  }

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
    var textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  function getComputed(elem, style) {
    return window.getComputedStyle(elem, null).getPropertyValue(style);
  }

})();
