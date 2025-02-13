// Background Music Setup
const romanticSongs = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
];

const sound = new Howl({
    src: [romanticSongs[Math.floor(Math.random() * romanticSongs.length)]],
    autoplay: true,
    loop: true,
    volume: 0.5
});

// Button Interactions
const messages = [
    "Are you sure?",
    "Really sure??",
    "Acha soch le 😂",
    "Dekhle ek aur baar 😏",
    "Mujhe sad mat bana 😔",
    "Okay fine, ruk jaata hoon... JK, bol na! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Floating Hearts Animation
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }, 1000);
});
