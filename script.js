// Handle No Button Fun Responses
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Make the "Yes" button bigger each time
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

// Handle Yes Click - Redirect to Love Page
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Open Love Letter Effect
function openLetter() {
    const letterContent = document.querySelector('.letter-content');
    letterContent.classList.toggle('hidden');
}

// Auto-play background music with user interaction
function startMusic() {
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play();
    
    // Hide the overlay after music starts
    document.getElementById("music-overlay").style.display = "none";
}
