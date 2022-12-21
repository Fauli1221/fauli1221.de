function copyToClipboard(e) {
    //console.log("help", e.value)
    navigator.clipboard.writeText(e.value);
    const tooltip = document.getElementsByClassName("tooltiptext");
    for (i = 0; i < tooltip.length; i++) {
        tooltip[i].innerHTML = "Copied: " + e.value;
    }
}

function resethover() {
    const tooltip = document.getElementsByClassName("tooltiptext");
    for (i = 0; i < tooltip.length; i++) {
        tooltip[i].innerHTML = "Copy to clipboard";
    }
}

function main() {
    const btnDiscordId = document.getElementById("copyDiscord");
    btnDiscordId.addEventListener("click", function () {
        copyToClipboard(btnDiscordId)
    })
    btnDiscordId.addEventListener("mouseout", resethover)
    const btnMatrix = document.getElementById("copyMatrix");
    btnMatrix.addEventListener("click", function () {
        copyToClipboard(btnMatrix)
    })
    btnMatrix.addEventListener("mouseout", resethover)
}

window.addEventListener("load", function () {
    main();
});

const socials = document.querySelectorAll('.socials');
socials.forEach(social => {
    social.addEventListener('click', () => {
        const button = social.querySelector('button');
        const link = social.querySelector('a');
        if (button) {
            button.click();
        } else if (link) {
            link.click();
        }
    });
});
