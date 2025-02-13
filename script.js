// Letter Opening Animation
function openLetter() {
    const letter = document.querySelector('.letter');
    letter.classList.add('open');
}

// Yes Button Interaction
function handleYesClick() {
    alert("Hehe 😳, glad you liked it!");
}

// No Button Interaction
function handleNoClick() {
    alert("Nahi 😆, but still, you’re awesome!");
}

// Floating Hearts Animation
document.addEventListener("DOMContentLoaded", function () {
    const heartsContainer = document.querySelector(".hearts-container");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
