doc.addEventListener('DOMContentLoaded', function() {
    liste.forEach(function(element) {
        element.addEventListener('click', function() {
            if (window.innerWidth > 500) {
                let index = parseInt(element.dataset.index);
                iframe.setAttribute("src", iframe_href[index]);
            } else {
                if (window.matchMedia('(max-width: 500px)')) {
                    window.open(iframe_href[element.dataset.index]);
                }
            };
        });
    });
});