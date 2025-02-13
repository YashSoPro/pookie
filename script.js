function openLetter() {
    document.querySelector('.letter').classList.remove('hidden');
    document.querySelector('.gif_container').classList.remove('hidden');
    document.querySelector('.open-button').style.display = 'none';
}

// Play background music
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play();
});
