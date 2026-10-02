document.addEventListener("DOMContentLoaded", () => {
    const choices = [
        "ok lol hello",
        "我在北京",
        "Hello, World!",
        "The DotP will rise again.",
        "GNUn't",
        "on foenem",
        "ok",
        "hi",
        ""
    ];

    const element = document.getElementById("headerSubTitle");

    if (element) {
        element.textContent = choices[Math.floor(Math.random() * choices.length)];
    }
});