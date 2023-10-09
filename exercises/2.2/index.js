const nbClicks = document.querySelector('#nbClicks');
const message = document.querySelector('#message');
const reset = document.querySelector('#reset')
let counter = 0;

window.addEventListener("click",onClick);

function onClick() {
    if (counter < 5) {
        nbClicks.innerHTML = "Nombre de click : " + counter;
    }
    else if(counter >= 5 && counter < 10) {
        nbClicks.innerHTML = "Nombre de click : " + counter;
        message.innerHTML = "Bravo, bel échauffement !";
    }
    else {
        nbClicks.innerHTML = "Nombre de click: " + counter;
        message.innerHTML = "Vous êtes passé maître en l'art du clic !";
        reset.hidden = false;
        reset.addEventListener("click",resetClick);
    }
    counter++;
}

function resetClick() {
    counter = 0;
    nbClicks.innerHTML = "Nombre de click : " + counter;
    message.innerHTML = "";
    reset.hidden = true;
}