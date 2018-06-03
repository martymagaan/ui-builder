# UI Builder

A simple pure javascript library for quickly building user interfaces.

**See [demo.html](http://projects.martymagaan.com/ui-builder/demo/demo.html) file to see it in action.**

## How To Use

Download and link js file in your HTML

    <script src="path-to/ui-builder.js"></script>

Quick example:

    var elem1 = app.create('div', 'elem1-id', 'some-class');

    var elem2 = app.create('p', 'elem2-id');
    elem2.addText('Hello!');

    elem1.add(elem2);

    elem1.addTo(app.get('root-div'));
    

## App Object Methods

### get(elementId) ###

Returns element of given id and adds custom methods (described below) to element.

Example:

    var elem = app.get('foo');

### create(tag, id[optional], className[optional]) ###

Returns new element of given tag, id, and classes with custom methods (described below).

Example:

    var elem1 = app.create('div');
    var elem2 = app.create('img', 'myImg');
    var elem3 = app.create('span', 'mySpan', 'class1 class2');
    var elem4 = app.create('div', null, 'class3');

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