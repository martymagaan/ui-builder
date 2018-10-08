# UI Builder

A simple pure javascript library for quickly building user interfaces programmatically by using a pattern in which
each element can create (and automatically append) its own child elements.

**See [demo.html](http://projects.martymagaan.com/ui-builder/demo/demo.html) file to see it in action.**

## How To Use

Download and link js file in your HTML

    <script src="path-to/ui-builder.js"></script>

Example:

    const app = ui.createRoot();
    const myDiv = app.create('div', 'myDiv');
    const p = myDiv.create('p');
    p.addText('Hello World!');

Creates:

    <div id="app">
      <div id="myDiv">
        <p>Hello World!</p>
      </div>
    </div>

How to achieve the same using javascript normally:

    const root = document.createElement('div');
    root.id = 'app';
    document.body.insertBefore(root, document.body.firstChild);

    const myDiv = document.createElement('div');
    myDiv.id = 'myDiv';
    root.appendChild(myDiv);

    const paragraph = document.createElement('p');
    const text = document.createTextNode('Hello World!');
    paragraph.appendChild(text);
    

## Ui Object Methods

### createRoot(id) ###

Creates a root element with given id at the beginning of the document body and returns it.

Example:

    const app = ui.createRoot('app');
    console.log(app);

Output:

    <div id="app"></div>


### get(id) ###

Gets element by id and adds custom ui-builder methods to element.

Example:

    const elem = ui.get('container');


## Element Methods ##

### create(tag, id[optional], className[optional]) ###

Creates a new element with given parameters, appends it to caller, and returns it.

Example:

    const list = elem.create('ul');
    const item1 = list.create('li', 'nav-home');
    const item2 = list.create('li', null, 'nav-icon');

Creates:

    <ul>
      <li id="nav-home"></li>
      <li class="nav-icon"></li>
    </ul>


### addText(text) ###

Appends text node with given text to caller.

Example:

    elem.addText('Hello!');


### addBreak() ###

Adds line break to caller.

Example:

    elem.addText('Hi!');
    elem.addBreak();
    elem.addText('Bye!');