const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    message.textContent =
        "Thank you! Your message has been submitted successfully.";

    form.reset();
});