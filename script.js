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
    const container = document.querySelector('.container');

    // Change No Button Text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes Button Size
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Get container bounds
    const containerRect = container.getBoundingClientRect();
    const maxX = containerRect.width - noButton.offsetWidth;
    const maxY = containerRect.height - noButton.offsetHeight - 50; // Keeping it inside the view

    // Generate random position within the container bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply the new position
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Handle Yes Button Click
function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Love Letter Toggle
function openLetter() {
    document.querySelector('.letter-content').classList.toggle('hidden');
}
