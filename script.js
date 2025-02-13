document.addEventListener("DOMContentLoaded", function () {
    // Love Letter Click Event
    const letterCover = document.querySelector(".letter-cover");
    const letter = document.querySelector(".letter");

    letterCover.addEventListener("click", function () {
        letterCover.style.display = "none";
        letter.style.display = "block";
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
});        setTimeout(() => {
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
