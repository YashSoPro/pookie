document.addEventListener("DOMContentLoaded", function () {
    // Love Letter Click Event
    const letterCover = document.querySelector(".letter-cover");
    const letter = document.querySelector(".letter");

    letterCover.addEventListener("click", function () {
        letterCover.style.display = "none";
        letter.style.display = "block";

        // Play background music when letter opens
        document.getElementById("bgMusic").play();
    });

    // Buttons Interaction
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.addEventListener("click", function () {
        alert("Awww 😍, I knew it!");
    });

    noBtn.addEventListener("click", function () {
        alert("Arre yaar 😭, phir bhi pyaar toh hamesha rahega!");
    });

    // Floating Hearts Animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.querySelector(".hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 500);
});
