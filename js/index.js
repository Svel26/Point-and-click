document.getElementById("mainTitle").innerText = "Point and Click adventure";
const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);
        switch (e.target.id) {
            case "chest":
                showMessage("this chest needs a key!");
                playAudio(chestSound);
                break;
            case "well":
                showMessage("nothing here...");
                playAudio(wellSound);
                break;
            default:
                hideMessage();
                break;
        }
    }
}

function showMessage(message, sound) {
    mainCharacterSpeech.innerHTML = message;
    mainCharacterSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4000);

    var audio = new Audio(sound);
    audio.play();
}

function hideMessage() {
    mainCharacterSpeech.innerHTML = "...";
    mainCharacterSpeech.style.opacity = 0;
}

const chestSound = new Audio("audio/chest.mp3");
const wellSound = new Audio("audio/well.mp3");
