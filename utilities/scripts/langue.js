if (navigator.onLine) {
    w.localStorage.setItem('Langue', langue);
    console.info('La langue de l\'utilisateur a été détectée et sauvegardée. (' + '"' + langue + '"' + ')');
}