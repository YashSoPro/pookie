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
let noButtonClicked = 0;

// Generate random position for No button
function getRandomPosition() {
    const container = document.querySelector('.container');
    const noButton = document.querySelector('.no-button');
    
    const maxX = container.clientWidth - noButton.offsetWidth;
    const maxY = container.clientHeight - noButton.offsetHeight;
    
    const randomX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    const randomY = Math.max(0, Math.min(maxY, Math.random() * maxY));
    
    return { x: randomX, y: randomY };
}

// Create flying hearts
function createHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(heart);
            
            // Remove heart after animation completes
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 400);
    }
}

// Handle No Button Click
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Change no button text
    noButton.textContent = messages[messageIndex];  
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Move No button to random position after a few clicks
    noButtonClicked++;
    if (noButtonClicked > 2) {
        const newPos = getRandomPosition();
        noButton.style.position = 'absolute';
        noButton.style.left = newPos.x + 'px';
        noButton.style.top = newPos.y + 'px';
    }
    
    // Increase Yes Button Size  
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);  
    yesButton.style.fontSize = `${currentSize * 1.1}px`;
    
    // Add some scale and glow to Yes button
    yesButton.style.transform = `scale(${1 + (noButtonClicked * 0.05)})`;
    yesButton.style.boxShadow = `0 0 ${5 + noButtonClicked}px rgba(76, 175, 80, 0.5)`;
    
    // Create flying hearts after several clicks
    if (noButtonClicked > 5) {
        createHearts();
    }
}

// Handle Yes Click
function handleYesClick() {
    // Create many hearts before redirecting
    createHearts();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 1000);
}

// Open Love Letter Effect
function openLetter() {
    const letterContent = document.querySelector('.letter-content');
    letterContent.classList.remove('hidden');
    setTimeout(() => {
        letterContent.classList.add('visible');
    }, 10);
}

// Try to play background music with user interaction
document.addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    if (music) {
        music.volume = 0.3;
        music.play().catch(e => console.log('Audio playback was not allowed'));
    }
}, { once: true });
