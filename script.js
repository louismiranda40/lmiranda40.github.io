// Louis Miranda - IT & Cybersecurity Portfolio

document.addEventListener("DOMContentLoaded", () => {

    // Console message
    console.log("Louis Miranda | IT & Cybersecurity Portfolio");
    console.log("System initialized.");

    // Typewriter effect for status
    const status = document.querySelector(".online");

    if (status) {
        const message = "● SYSTEM ONLINE // PORTFOLIO IN DEVELOPMENT";
        let i = 0;

        status.textContent = "";

        function typeStatus() {
            if (i < message.length) {
                status.textContent += message.charAt(i);
                i++;
                setTimeout(typeStatus, 45);
            }
        }

        typeStatus();
    }

    // Show current local time
    const clock = document.getElementById("clock");

    function updateClock() {
        if (clock) {
            const now = new Date();

            clock.textContent =
                "LOCAL TIME // " +
                now.toLocaleTimeString();
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

});
