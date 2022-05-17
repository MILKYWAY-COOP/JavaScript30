const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100px


function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = x + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk = Math.round((y / height * walk) - (walk / 2))
    
    text.style.textShadow = `${xWalk}px ${yWalk}px 0.5px rgba(5, 10, 7, 0.7)`
    
}
hero.addEventListener('mousemove', shadow);