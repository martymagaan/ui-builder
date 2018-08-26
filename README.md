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

Creates:

    <div id="app-root">
      <div id="myDiv" class="selected">
        <p>Hello World!</p>
      </div>
    </div>
    

## Ui Object Methods

### init() ###

Creates a root element in the document body that has custom methods for adding new elements to it.
The root element can be referenced using *ui.root*.

Example:

ui.init();

### get(id) ###

Gets element by id.

Example:

ui.get('container');


## Element Methods ##

### create(tag, id[optional], className[optional]) ###

Creates new element with given parameters and custom ui methods, appends it to caller, and returns it.

Example:

    let childElem = parentElem.create('img');
    childElem.src = 'img.jpg';

### addText(text) ###

Appends text node with given text to caller.

Example:

    elem.addText('Hello!');
