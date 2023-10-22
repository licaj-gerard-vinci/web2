const lightSequence = ['red', 'orange', 'green', 'orange'];
const delaysBetweenLightChanges = 2000;
const lightElement = document.querySelector('.red');

changeLight();

function changeLight() {
    let index = 0;
    setInterval(() => {
        const color = lightSequence[index];
        lightElement.style.backgroundColor = color;
        index = (index + 1) % lightSequence.length;
    }, delaysBetweenLightChanges);
}
