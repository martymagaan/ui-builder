# UI Builder

A simple pure javascript library for quickly building user interfaces.

**See [demo.html](http://projects.martymagaan.com/ui-builder/demo/demo.html) file to see it in action.**

## How To Use

Download and link js file in your HTML

    <script src="path-to/ui-builder.js"></script>

Quick example:

    var elem1 = ui.create('div', 'elem1-id', 'some-class');

    var elem2 = ui.create('p', 'elem2-id');
    elem2.addText('Hello!');

    elem1.add(elem2);

    elem1.addTo(ui.get('root-div'));
    

## Ui Object Methods

### create(tag, id[optional], className[optional]) ###

Returns new element with given tag, id, and classes and adds custom element methods.

Example:

    var elem1 = ui.create('div');
    var elem2 = ui.create('img', 'myImg');
    var elem3 = ui.create('span', 'mySpan', 'class1 class2');
    var elem4 = ui.create('div', null, 'class3');

### get(elementId) ###

Returns element of given id and adds custom element methods.

Example:

    var elem = ui.get('foo');

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

    var marginTop = elem.getComputed('margin-top');