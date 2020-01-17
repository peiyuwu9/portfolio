$(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $(".up-arrow").on("click", function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

    $(".fa-envelope").on("click", function () {
        // Create new element
        const el = document.createElement("input");
        // Set value (string to be copied)
        el.setAttribute("value", "peiyuwu9@gmail.com");

        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);

        const text = document.getElementById("copy-text");
        text.innerHTML = "Email Copied";

        setTimeout(function(){ text.innerHTML = "Copy Email"; }, 3000)
    })

    AOS.init();
})