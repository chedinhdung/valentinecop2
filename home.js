document.addEventListener("DOMContentLoaded", () => {

    const flower = document.getElementById("flowerSection");
    const love = document.getElementById("loveSection");

    const heart = document.querySelector(".heart");
    const letterSection = document.getElementById("letterSection");
    const envelope = document.getElementById("envelope");

    flower.addEventListener("click", () => {
        flower.classList.remove("active");
        love.classList.add("active");

        const bears = love.querySelectorAll(".bear-left, .bear-right");
        bears.forEach(bear => {
            bear.style.animation = "none";
            void bear.offsetWidth;
            bear.style.animation = "";
        });
    });

    heart.addEventListener("click", () => {
        heart.classList.add("hide");
        letterSection.classList.add("show");
    });

    envelope.addEventListener("click", () => {
        letterSection.classList.remove("show");
        heart.classList.remove("hide");
    });

});
