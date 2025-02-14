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

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;

    // Button Move Effect
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function handleYesClick() {
    document.querySelector("#love-letter").classList.remove("hidden");
    typewriterEffect();
    createPetalEffect();
}

// Typewriter Effect for Love Letter
function typewriterEffect() {
    const text = "Jabse tujhe dekha, dil kaafi behka, tera naam sunke, saari duniya se alag mehka! ❤️";
    let i = 0;
    const loveLetter = document.querySelector("#love-letter");
    loveLetter.textContent = "";
    
    function type() {
        if (i < text.length) {
            loveLetter.textContent += text[i];
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

// Petal Drop Effect
function createPetalEffect() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            let petal = document.createElement("div");
            petal.className = "petal";
            petal.style.left = `${Math.random() * window.innerWidth}px`;
            petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
            document.body.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 5000);
        }, i * 200);
    }
}
