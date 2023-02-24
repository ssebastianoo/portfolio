const likedElement = document.getElementById("likedElement");
const socialIcons = document.getElementsByClassName("social-icon");
const hover = document.querySelector(".hover");

for (let i = 0; i < socialIcons.length; i++) {
    socialIcons[i].addEventListener("mouseenter", (e) => {
        e.target.src = e.target.src.replaceAll(".png", "-full.png");
        e.target.animate(
            [{ transform: "scale(1)" }, { transform: "scale(1.2)" }],
            {
                duration: 230,
                fill: "forwards",
                easing: "cubic-bezier(.77,0,.18,1)",
            }
        );
    });

    socialIcons[i].addEventListener("mouseleave", (e) => {
        e.target.animate(
            [{ transform: "scale(1.2)" }, { transform: "scale(1)" }],
            {
                duration: 230,
                fill: "forwards",
                easing: "cubic-bezier(.77,0,.18,1)",
            }
        );
        e.target.src = e.target.src.replace("-full.png", ".png");
    });
}

const words = [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML",
    "SQL",
    "CSS",
    "Svelte",
    "React",
];

let currentWord = 0;

likedElement.addEventListener(
    "animationiteration",
    () => {
        currentWord++;
        if (currentWord === words.length) currentWord = 0;
        likedElement.innerHTML = `<span>${words[currentWord]}</span>`;
    },
    false
);

document.addEventListener("DOMContentLoaded", async () => {
    const picsEl = document.getElementById("pics");
    const res = await fetch("https://pics.sebastianogirotto.me/");
    const data = await res.json();

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    const shuffled = data.pics
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    for (let i = 0; i < shuffled.length; i++) {
        const img = document.createElement("img");
        img.src = shuffled[i];

        if (i % 2 === 0) div1.appendChild(img);
        else div2.appendChild(img);
    }

    document.querySelector(".loading-spinner").remove();

    picsEl.appendChild(div1);
    picsEl.appendChild(div2);

    if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
    ) {
        hover.style.display = "block";
        document.addEventListener("mousemove", (e) => {
            const pos = {
                x: e.clientX + "px",
                y: e.clientY + "px",
            };

            hover.style.left = pos.x;
            hover.style.top = pos.y;
        });
    }
});
