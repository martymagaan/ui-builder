ui.init();

let foo = ui.root.create('div', 'foo');
foo.addText('Hello World!');

let bar = ui.root.create('p', null, 'bar');
bar.addText('This is a demo.');
