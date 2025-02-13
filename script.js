document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.getElementById("no-button");
    const yesButton = document.getElementById("yes-button");
    const messageBox = document.getElementById("message");

    let moveCount = 0; 

    // Function to move the "No" button randomly
    function moveNoButton() {
        moveCount++;
        const maxX = window.innerWidth - noButton.offsetWidth - 20;
        const maxY = window.innerHeight - noButton.offsetHeight - 20;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        // Change text after multiple moves
        if (moveCount === 3) {
            noButton.innerText = "Pakka?";
        } else if (moveCount === 5) {
            noButton.innerText = "Soch le!";
        } else if (moveCount > 6) {
            noButton.style.display = "none"; // Hide button after too many moves
            messageBox.innerHTML = "Fine, mai ja raha hu... 😔";
            messageBox.style.background = "red";
            messageBox.style.padding = "15px";
            messageBox.style.color = "white";
            messageBox.style.borderRadius = "10px";
        }
    }

    // Attach event to "No" button
    noButton.addEventListener("mouseover", moveNoButton);

    // When clicking "Yes" button, show final message
    yesButton.addEventListener("click", function () {
        messageBox.innerHTML = "Yay! ❤️ Tum meri Valentine ban gayi!";
        messageBox.style.color = "green";
        messageBox.style.fontSize = "24px";
    });
});
