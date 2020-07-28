let time = 2000, 
    currentImageIndex = 0, 
    images = document.querySelectorAll('#slider img'),
    max = images.length; 

function nextImage(){
    images[currentImageIndex].classList.remove('selected');

    currentImageIndex++; 

    if(currentImageIndex >= max){
        currentImageIndex = 0; 
    }

    images[currentImageIndex].classList.add('selected');
}

    //Da início a alguma coisa. 
function start(){
    setInterval(() => {
        //Troca de imagem
        nextImage();
    }, time);
}

window.addEventListener('load', start);