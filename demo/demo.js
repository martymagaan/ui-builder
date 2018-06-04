var root = ui.get('app-root');

var foo = ui.create('div', 'foo');
foo.addText('Hello World!');
foo.addTo(root);

var bgColor = foo.getComputed('background-color');

var bar = ui.create('p', null, 'bar');
bar.addText('The background color of the above div is ' + bgColor + '.');
root.add(bar);
