# UI Builder

A simple pure javascript library for quickly building user interfaces.

**See [demo.html](http://projects.martymagaan.com/ui-builder/demo/demo.html) file to see it in action.**

## How To Use

Download and link js file in your HTML

    <script src="path-to/ui-builder.js"></script>

Example:

    ui.init();

    let elem1 = ui.create('div', 'myDiv', 'selected', ui.root);
    let elem2 = ui.create('p', null, null, elem1);
    elem2.addText('Hello World!');

    /* Creates:

    <div id="app-root">
      <div id="divId" class="selected">
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

### add(child) ###

Appends given element to caller.

Example:

    elem1.add(elem2);

### addTo(parent) ###

Appends caller to given element.

Example:

    elem1.addTo(elem2);

### addText(text) ###

Appends text node with given text to caller.

Example:

    elem.addText('Hello!');

### getComputed(style) ###

Returns computed style value.

Example:

    let marginTop = elem.getComputed('margin-top');