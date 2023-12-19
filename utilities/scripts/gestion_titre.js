doc.addEventListener('DOMContentLoaded', function() {
	let titre_index = parseInt(doc.querySelector('#titre').dataset.titre);
	titres.textContent += titre_sujets[titre_index];
});