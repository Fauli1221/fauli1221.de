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

async function getDiscordName() {
    try {
        const response = await fetch('https://ancient-star-cd9b.fauli1221.workers.dev/');
        const data = await response.json();
        const usernameAndDiscriminator = data.username + "#" + data.discriminator;
        return usernameAndDiscriminator;
    } catch (error) {
        console.error(error);
        return null;
    }
}
async function changeDiscordName() {
    const discordName = await getDiscordName();
    const discordElement = document.getElementById('copyDiscord')
    discordElement.value = discordName
    discordElement.innerHTML = discordName
}

window.addEventListener("load", function () {
    main();
    changeDiscordName()
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

