const currentDate = new Date();
const currentMonth = currentDate.getMonth();

let randomStylesheet = '/css/default-stylesheet.css'; // Set default value for randomStylesheet

if (currentMonth === 5) {
  document.querySelector('h1 span').classList.add('pride');
const stylesheets = [
    '/css/june/june-stylesheet-r.css',
    '/css/june/june-stylesheet-l.css',
    '/css/june/june-stylesheet-g.css',
    '/css/june/june-stylesheet-b.css',
    '/css/june/june-stylesheet-t.css',
    '/css/june/june-stylesheet-q.css',
    '/css/june/june-stylesheet-i.css',
    '/css/june/june-stylesheet-a.css'
  ];
  randomStylesheet = stylesheets[Math.floor(Math.random() * stylesheets.length)]; // Reassign randomStylesheet
        }
const stylesheet = document.querySelector('#june-stylesheet');
stylesheet.href = randomStylesheet;
