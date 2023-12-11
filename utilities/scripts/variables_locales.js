const doc = document;
const w = window;
const iframe = doc.querySelector('.iframe');
const player = doc.querySelector('.player');
const audio = doc.querySelector('audio');
const img = doc.querySelector('.jeu-image');
var liste = doc.querySelectorAll('li');
var langue = navigator.language;
let iframe_href = [null, './pages/groupe_1.html', './pages/groupe_2.html', './pages/groupe_3.html',
    './pages/groupe_4.html', './pages/groupe_5.html', './pages/groupe_6.html',
    './pages/groupe_7.html', './pages/groupe_8.html',
];