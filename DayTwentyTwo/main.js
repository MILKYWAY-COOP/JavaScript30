const triggers = document.querySelectorAll('a');
const highLight = document.createElement('span');

highLight.classList.add('highLight');
document.body.append(highLight);

function highLightlink() {
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
}

triggers.forEach((a) => a.addEventListener('mouseenter', highLightlink));
