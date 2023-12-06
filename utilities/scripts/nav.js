doc.addEventListener('DOMContentLoaded', function(e) {

    liste.forEach(function(element) {
        element.addEventListener('click', function() {
            liste.forEach(function(el) {
                el.classList.remove('actif');
            });
            element.classList.add('actif');
        });

        doc.addEventListener('click', function(e) {
            if (!e.target.closest('li')) {
                liste.forEach(function(el) {
                    el.classList.remove('actif');
                });
            }
        });
    });

});