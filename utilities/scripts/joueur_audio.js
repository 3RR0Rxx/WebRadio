doc.addEventListener("DOMContentLoaded", function() {
    let index = parseInt(audio.dataset.audio, 10);
    audio.src = `../utilities/assets/audio_groupe_${index}.mp3`;
    audio.setAttribute('title', "Audio Player | Podcasts");
});