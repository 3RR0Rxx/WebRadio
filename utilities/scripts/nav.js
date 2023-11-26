doc.addEventListener('DOMContentLoaded', function(e) {

    // Ajoute et retire la classe 'actif' si un element de la liste est cliqué
    liste.forEach(function(element) {
        element.addEventListener('click', function() {
            liste.forEach(function(el) {
                el.classList.remove('actif');
            });
            element.classList.add('actif');
        });

        // Retire la classe 'actif' si l'utilsateur clique autrepart sur la page
        doc.addEventListener('click', function(e) {
            if (!e.target.closest('li')) {
                liste.forEach(function(el) {
                    el.classList.remove('actif');
                });
            }
        });
    });

});