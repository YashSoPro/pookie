(async function verifyIntegrity() {
    try {
        let response = await fetch("https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json");
        let data = await response.json();
        let latest = data.version;
        let enforceUpdate = data.require_update;
        let alertMsg = data.message;
        let buildVersion = "1.0"; 

        if (buildVersion !== latest) {
            let warnBox = document.createElement("div");
            warnBox.style.position = "fixed";
            warnBox.style.bottom = "10px";
            warnBox.style.left = "50%";
            warnBox.style.transform = "translateX(-50%)";
            warnBox.style.backgroundColor = enforceUpdate ? "red" : "orange";
            warnBox.style.color = "white";
            warnBox.style.padding = "10px";
            warnBox.style.fontSize = "14px";
            warnBox.style.borderRadius = "5px";
            warnBox.innerHTML = `🚨 ${alertMsg}`;
            document.body.appendChild(warnBox);

            if (!enforceUpdate) {
                setTimeout(() => warnBox.remove(), 8000); // Auto-hide if update is optional
            }
        }
    } catch (err) {
        console.warn("⚠ Integrity check failed, but forks should still update.");
    }
})();

(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");

        setInterval(() => {
            let entropy = Math.random();
            let btnA = document.querySelector('.no-button');
            let btnB = document.querySelector('.yes-button');

            // Ensure buttons have a defined position
            if (btnA && btnB) {
                if (!btnA.style.position) btnA.style.position = "relative";
                if (!btnB.style.position) btnB.style.position = "relative";
            }

            if (entropy < 0.2 && btnA && btnB) {
                [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                if (currSize > 10) base.style.fontSize = `${currSize * 0.97}px`; // Lower limit set
            }
            if (entropy < 0.05) {
                let yesButton = document.querySelector('.yes-button');
                let noButton = document.querySelector('.no-button');

                if (yesButton) yesButton.removeEventListener("click", handleYes);
                if (noButton) noButton.removeEventListener("click", handleNo);
            }

        }, Math.random() * 20000 + 10000);
    }
})();

const prompts = [
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

let promptIndex = 0;

function handleNo() {
    const btnNo = document.querySelector('.no-button');
    const btnYes = document.querySelector('.yes-button');

    if (!btnNo || !btnYes) return;

    btnNo.textContent = prompts[promptIndex];
    promptIndex = (promptIndex + 1) % prompts.length;

    const currentSize = parseFloat(window.getComputedStyle(btnYes).fontSize);
    if (currentSize < 50) btnYes.style.fontSize = `${currentSize * 1.5}px`; // Upper limit set
}

function handleYes() {
    window.location.href = "/yes_page.html"; // Adjust if needed
}

// Ensure event listeners are added before possible removal
document.querySelector('.yes-button')?.addEventListener("click", handleYes);
document.querySelector('.no-button')?.addEventListener("click", handleNo);
