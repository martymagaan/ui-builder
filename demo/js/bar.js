function bar() {
  var barDiv = app.create('div', 'bar');
  var fooDiv = app.get('foo');
  var bgColor = fooDiv.getComputed('background-color');
  barDiv.addText('The background color of the div above is ' + bgColor);
  barDiv.addTo(app.get('app-root'));
}
