const doc = document;
const w = window;
const iframe = doc.querySelector('.iframe');
const player = doc.querySelector('.player');
const audio = doc.querySelector('audio');
const img = doc.querySelector('.jeu-image');
<<<<<<< HEAD
var titres = doc.querySelector('#titre');
=======
>>>>>>> 382a6ef5c4467a2723a8555bc672a400dfd781d0
var liste = doc.querySelectorAll('li');
var langue = navigator.language;

let iframe_href = [null, './pages/groupe_1.html', './pages/groupe_2.html', './pages/groupe_3.html',
    './pages/groupe_4.html', './pages/groupe_5.html', './pages/groupe_6.html',
    './pages/groupe_7.html', './pages/groupe_8.html',
];

let titre_sujets = [null, "L'histoire des jeux vidéos", "L'évolution des consoles et l'avenir du jeu vidéo",
    "L'industrie du jeu vidéo et son modèle économique", "Les femmes dans les jeux vidéos",
    "Le sport dans les jeux vidéos", "Les métiers du jeu vidéo",
    "Les salons de jeux et évents gaming"
];