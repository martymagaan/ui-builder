# UI Builder

A simple pure javascript library for quickly building user interfaces.

**See [demo.html](http://projects.martymagaan.com/ui-builder/demo/demo.html) file to see it in action.**

## How To Use

Download and link js file in your HTML

    <script src="path-to/ui-builder.js"></script>

Example:

    ui.init();

    let elem1 = ui.root.create('div', 'myDiv', 'selected');
    let elem2 = elem1.ui.create('p');
    elem2.addText('Hello World!');

    /* Creates:

    <div id="app-root">
      <div id="myDiv" class="selected">
        <p>Hello World!</p>
      </div>
    </div>

    */
    

## Ui Object Methods

### init() ###

Creates a root element in the document body that can be referenced using *ui.root*. The highest level 
elements in your app should be appended to this element.

### create(tag, id[optional], className[optional], parent[optional]) ###

Returns new element with given tag, id, and classes, adds custom methods to element, and appends element 
to parent if given.

Example:

    let elem = ui.create('div');

    // OR

    let elem = ui.create('img', 'myImg');

    // OR

    let elem = ui.create('span', 'mySpan', 'class1 class2', ui.root);

    // OR

    let elem = ui.create('div', null, 'class1');

### get(elementId) ###

Returns element of given id and adds custom element methods.

Example:

    let elem = ui.get('foo');

## Custom Element Methods ##

### ui.add(child) ###

Appends given element to caller.

Example:

    elem1.ui.add(elem2);

### ui.addTo(parent) ###

Appends caller to given element.

Example:

    elem1.ui.addTo(elem2);

### ui.addText(text) ###

Appends text node with given text to caller.

Example:

    elem.ui.addText('Hello!');

### ui.create(tag, id[optional], className[optional]) ###

Creates new element with given parameters and custom methods, appends it to caller, and returns it.

Example:

    let childElem = parentElem.ui.create('img');
    childElem.src = 'img.jpg';