doc.addEventListener("DOMContentLoaded", function() {
    let nom_jeu = img.dataset.jeu;
    img.setAttribute("src", `${nom_jeu}.jpg`);
    img.setAttribute("alt", `Image du jeu "${nom_jeu}"`);
    img.setAttribute("title", `"${nom_jeu}`);
});