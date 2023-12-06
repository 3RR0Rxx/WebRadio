const doc = document;
const w = window;
const iframe = doc.querySelector('.iframe');
const player = doc.querySelector('.player');
const audio = doc.querySelector('audio');
const play_button = doc.querySelector('.play-btn');
const pause_button = doc.querySelector('.pause-btn');
const time = doc.querySelector('.time');
const track = doc.querySelector('.track');
var liste = doc.querySelectorAll('li');
var langue = navigator.language;
let iframe_href = [null, './pages/groupe_1.html', './pages/groupe_2.html', './pages/groupe_3.html',
    './pages/groupe_4.html', './pages/groupe_5.html', './pages/groupe_6.html',
    './pages/groupe_7.html', './pages/groupe_8.html',
];

function formatageTemps(ms) {
    var seconds = Math.floor(ms / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}