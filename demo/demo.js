ui.init();

let foo = ui.root.create('div', 'foo');
foo.addText('Hello World!');

let bgColor = foo.getComputed('background-color');

let bar = ui.root.create('p', null, 'bar');
bar.addText('The background color of the above div is ' + bgColor + '.');
