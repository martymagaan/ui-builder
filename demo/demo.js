ui.init();

let foo = ui.create('div', 'foo', null, ui.root);
foo.addText('Hello World!');

let bgColor = foo.getComputed('background-color');

let bar = ui.create('p', null, 'bar', ui.root);
bar.addText('The background color of the above div is ' + bgColor + '.');
