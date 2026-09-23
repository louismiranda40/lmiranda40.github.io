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
// Louis Miranda
// IT & Cybersecurity Portfolio


document.addEventListener("DOMContentLoaded", function () {

    console.log("Louis Miranda Portfolio");
    console.log("System initialized.");


    // Find the status element
    const status = document.querySelector(".online");


    // Typewriter status animation
    if (status) {

        const message =
            "● SYSTEM ONLINE // PORTFOLIO IN DEVELOPMENT";

        status.textContent = "";

        let position = 0;

        function typeStatus() {

            if (position < message.length) {

                status.textContent += message.charAt(position);

                position++;

                setTimeout(typeStatus, 40);
            }
        }

        typeStatus();
    }

});