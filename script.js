const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad... 💔",
    "I will be very sad... 💔",
    "I will be very very very sad... 💔",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (messageIndex < messages.length) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;
    }

    // Make Yes button grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

/* Floating hearts animation */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    // Random position (left and top)
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh"; 

    // Random size for hearts
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = `${size}px`;

    // Random animation duration
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.querySelector(".heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts continuously
setInterval(createHeart, 500);
