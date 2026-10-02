document.addEventListener("DOMContentLoaded", () => {
    const choices = [
        "ok lol hello",
        "我在北京",
        "Hello, World!",
        "I<3DotP",
        "你好世界！",
        "Made in Kazakhstan",
        ":)",
        "Your data is very safe.. or is it?",
        "I use Arch, btw.",
        "( ͡° ͜ʖ ͡°)",
        "ФωФ"
    ];

    const element = document.getElementById("headerSubTitle");

    if (element) {
        element.textContent = choices[Math.floor(Math.random() * choices.length)];
    }
});