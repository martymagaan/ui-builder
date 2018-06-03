function foo() {
  var fooDiv = app.create('div', 'foo');
  fooDiv.addText('Hello World!');
  var appRoot = app.get('app-root');
  appRoot.add(fooDiv);
}
