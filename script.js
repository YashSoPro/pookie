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

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        // Change text after multiple moves
        if (moveCount === 3) {
            noButton.innerText = "Pakka?";
        } else if (moveCount === 5) {
            noButton.innerText = "Soch le!";
        } else if (moveCount > 6) {
            noButton.style.display = "none"; // Hide "No" button after too many moves
        }
    }

    // Attach event to "No" button
    noButton.addEventListener("mouseover", moveNoButton);

    // When clicking "Yes" button, show final message and fix position
    yesButton.addEventListener("click", function () {
        messageBox.innerHTML = "Yay! ❤️ Tum meri Valentine ban gayi!";
        messageBox.style.color = "green";
        messageBox.style.fontSize = "24px";

        // Ensure "No" button is hidden and "Yes" button is centered properly
        noButton.style.display = "none"; 
        yesButton.style.position = "relative"; // Reset to avoid absolute positioning issues
        yesButton.style.left = "0";
        yesButton.style.top = "0";
    });
});
