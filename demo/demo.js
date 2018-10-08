const root = ui.createRoot('root');

const header = root.create('header', 'myHeader');
header.addText('Hello World!');

const content = root.create('div', null, 'content');
content.addText('This is a demo.');
content.addBreak();

const logo = content.create('img', 'myLogo');
logo.src = 'http://portfolio.martymagaan.com/img/tools.svg';
logo.alt = 'Logo';
