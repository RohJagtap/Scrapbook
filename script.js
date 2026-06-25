// PASSWORD

const PASSWORD = "pragati123";

function checkPassword() {

    const enteredPassword =
        document.getElementById("passwordInput").value;

    if (enteredPassword === PASSWORD) {

        document.getElementById("loginScreen")
            .classList.add("hidden");

        document.getElementById("mainContent")
            .classList.remove("hidden");

        startTypewriter();

    } else {

        alert("Wrong password ❤️");

    }
}


// FLOATING HEARTS

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💘"
    ][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 400);


// MUSIC

const music =
    document.getElementById("bgMusic");

function toggleMusic() {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}


// TYPEWRITER LETTER

const letterText =
`My Dearest Pragati,

Every day with you teaches me something new about love.

There have been moments when I made mistakes,
moments when I wasn't the best version of myself.

But loving you has made me want to grow,
to become more patient,
more understanding,
and a better man.

Thank you for every smile,
every call,
every memory,
and every dream we've shared.

No matter how many miles separate us,
my heart always finds its way back to you.

Forever yours,
Rohit ❤️`;

let index = 0;

function startTypewriter() {

    const target =
        document.getElementById("typewriter");

    function type() {

        if (index < letterText.length) {

            target.innerHTML +=
                letterText.charAt(index);

            index++;

            setTimeout(type, 35);

        }

    }

    type();
}


// COUNTDOWN

const targetDate =
new Date("2026-12-31 00:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance %
            (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
            (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
            (1000 * 60))
            /
            1000
        );

    document.getElementById("days")
        .innerText = days;

    document.getElementById("hours")
        .innerText = hours;

    document.getElementById("minutes")
        .innerText = minutes;

    document.getElementById("seconds")
        .innerText = seconds;

}, 1000);


// MEMORY POPUP

function openMemory(title, text) {

    document.getElementById("modalTitle")
        .innerText = title;

    document.getElementById("modalText")
        .innerText = text;

    document.getElementById("memoryModal")
        .style.display = "flex";

}

function closeModal() {

    document.getElementById("memoryModal")
        .style.display = "none";

}

window.onclick = function(event) {

    const modal =
        document.getElementById("memoryModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

}
