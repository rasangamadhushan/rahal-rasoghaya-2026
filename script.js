/* =========================================================
   RAHAL RASOGHAYA 2026
   WELCOME INTERACTION
   ========================================================= */

const welcomeButton =
    document.getElementById("welcomeButton");


welcomeButton.addEventListener("click", () => {

    /*
     * Small premium interaction
     * when the visitor taps the button.
     */

    welcomeButton.classList.add("clicked");

    welcomeButton.innerHTML = `
        <span>ආයුබෝවන් ✦</span>
        <span class="arrow">✓</span>
    `;


    /*
     * Reset after a short moment.
     */

    setTimeout(() => {

        welcomeButton.innerHTML = `
            <span>උත්සවයට පිවිසෙන්න</span>
            <span class="arrow">→</span>
        `;

        welcomeButton.classList.remove("clicked");

    }, 2200);

});
