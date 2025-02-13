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

    // Change No Button Text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes Button Size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Move No Button Randomly Within Screen Bounds
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    noButton.style.left = `${Math.max(10, Math.random() * maxX)}px`;
    noButton.style.top = `${Math.max(10, Math.random() * maxY)}px`;
}

// Handle Yes Click - Redirect to Love Page
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Open Love Letter Effect
function openLetter() {
    document.querySelector('.letter-content').classList.toggle('hidden');
}

// Auto-play background music
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");
    music.volume = 0.5;
    music.play();
});
