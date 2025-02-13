document.addEventListener("DOMContentLoaded", function () {
    // Click-to-open letter animation
    const letterContainer = document.querySelector('.letter-container');
    const letter = document.querySelector('.letter');
    const letterCover = document.querySelector('.letter-cover');

    letterContainer.addEventListener("click", function () {
        letter.style.display = "block";
        letterCover.style.display = "none";
    });

    // Button interactions
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");

    yesButton.addEventListener("click", function () {
        alert("Aww, that's cute! 😳💖");
        createFloatingText("Yay! ❤️", yesButton);
    });

    noButton.addEventListener("click", function () {
        alert("Hehe, just kidding! 😂");
        createFloatingText("Arre! 😆", noButton);
    });

    // Floating Hearts Effect
    function createFloatingHearts() {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animation = "floatUp 4s linear infinite";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createFloatingHearts, 500);

    // Floating Text on Button Click
    function createFloatingText(text, button) {
        let floatingText = document.createElement("div");
        floatingText.innerText = text;
        floatingText.style.position = "absolute";
        floatingText.style.color = "red";
        floatingText.style.fontSize = "16px";
        floatingText.style.fontWeight = "bold";
        floatingText.style.left = button.offsetLeft + button.offsetWidth / 2 + "px";
        floatingText.style.top = button.offsetTop - 20 + "px";
        floatingText.style.animation = "floatUpText 1.5s ease-out";

        document.body.appendChild(floatingText);
        setTimeout(() => floatingText.remove(), 1500);
    }

    // Play background music (Ambarsariya)
    var sound = new Howl({
        src: ['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.5,
    });

    sound.play();
});
