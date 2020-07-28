/**
 * Lógica: aplicar a classe selected as informações e ao slide ao mesmo tempo. 
 */
let time = 3000, 
    i = 0,
    content = document.querySelectorAll('.content div'), 
    slide = document.querySelectorAll('.slide img'), 
    circle = document.querySelectorAll('.circle')
    maxContent = content.length;

function next(){
    i++;
    content[i - 1].classList.remove('selected');
    slide[i - 1].classList.remove('selected');
    circle[i - 1].classList.remove('selected');

    if(i === maxContent){
        i = 0
    }

    content[i].classList.add('selected');
    slide[i].classList.add('selected');
    circle[i].classList.add('selected');
    
}

function start(){
    setInterval(() => {
        next();
        
    }, time);
}

window.addEventListener('load', start());

