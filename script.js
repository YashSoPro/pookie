// No Button Fun Responses with Hinglish Touch
const messages = [
    "Are you sure? 🤔",
    "Pakki baat? 🧐",
    "Sach me? 😢",
    "Pookie please... 🥺",
    "Ek baar aur soch lo! 🥹",
    "Nahi bola to dil toot jayega 💔",
    "Mujhe rona aa jayega... 😭",
    "Abhi bhi no? 😭💔",
    "Fine, mai ja raha hu... 😔",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

// Handle No Button Click
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change no button text with new Hinglish message  
    noButton.textContent = messages[messageIndex];  
    messageIndex = (messageIndex + 1) % messages.length;  

    // Increase Yes Button Size  
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);  
    yesButton.style.fontSize = `${currentSize * 1.2}px`;  

    // Ensure No Button stays on screen  
    window.scrollTo(0, 0);
}

// Handle Yes Click - Redirect to Love Page
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Open Love Letter Effect
function openLetter() {
    document.querySelector('.letter-content').classList.toggle('hidden');
}

// Music Player Functions
function playSong(songUrl, element) {
    const audioPlayer = document.getElementById('current-song');
    const allSongs = document.querySelectorAll('.song');
    
    // Remove playing class from all songs
    allSongs.forEach(song => song.classList.remove('playing'));
    
    // Add playing class to clicked song
    element.classList.add('playing');
    
    // Set new song source and play
    audioPlayer.src = songUrl;
    audioPlayer.play();
    
    // Pause background music if it's playing
    const bgMusic = document.getElementById('bg-music');
    bgMusic.pause();
}

// Memory Card Flip Function
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('body');
    const heartCount = 15;
    
    for (let i = 0; i <heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(heart);
    }
}

// Auto-play background music and initialize hearts
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    
    // Try to play music (may be blocked by browser)
    const playPromise = music.play();
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Auto-play was prevented by browser");
        });
    }
    
    // Create floating hearts
    createFloatingHearts();
    
    // Add click-to-play music if auto-play was blocked
    document.body.addEventListener('click', function() {
        if (music.paused) {
            music.play().catch(e => {});
        }
    }, { once: true });
});
