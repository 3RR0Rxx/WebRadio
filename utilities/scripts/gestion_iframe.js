doc.addEventListener('DOMContentLoaded', function() {
    liste.forEach(function(element) {
        element.addEventListener('click', function() {
<<<<<<< HEAD
            if (window.innerWidth > 500) {
                let index = parseInt(element.dataset.index);
                iframe.setAttribute("src", iframe_href[index]);
            } else {
                if (window.matchMedia('(max-width: 500px)')) {
                    window.open(iframe_href[element.dataset.index]);
                }
            };
=======
            let index = parseInt(element.dataset.index);
            iframe.setAttribute("src", iframe_href[index])
>>>>>>> 382a6ef5c4467a2723a8555bc672a400dfd781d0
        });
    });
});