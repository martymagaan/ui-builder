ui.init();

const header = ui.root.create('header', 'myHeader');
header.addText('Hello World!');

const content = ui.root.create('div', null, 'content');
content.addText('This is a demo.');
content.addBreak();
content.createImg(
   'http://portfolio.martymagaan.com/img/tools.svg',
   'Logo',
   'myLogo'
);
