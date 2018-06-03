var root = app.get('app-root');

var foo = app.create('div', 'foo');
foo.addText('Hello World!');
foo.addTo(root);

var bgColor = foo.getComputed('background-color');

var bar = app.create('p', null, 'bar');
bar.addText('The background color of the above div is ' + bgColor + '.');
root.add(bar);
