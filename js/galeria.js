// Seleccionamos todos los elementos con clase slide
let sliderImages = document.querySelectorAll(".slider img"),
arrowRight = document.querySelectorAll(".arrow-right"),
arrowLeft = document.querySelectorAll(".arrow-left"),
current = 0;

// Ocultamos todas las imagenes
function reset(){
for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
}
}

function startSlide(){
reset();
// Seleccionamos la primera imagen
sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft(){
reset();
// Pasamos a la imagen anterior a la actual
sliderImages[current - 1].style.display = "block";
current--;
}

// Show next
function slideRight(){
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// Click flecha izquierda
arrowLeft.forEach(arrow => {
    arrow.addEventListener("click", function(){
        if(current === 0){
            current = sliderImages.length;
        }
        slideLeft();
        modalImg.src = `img/galeria/${current}.jpg`;
    });
})

// Click flecha derecha
arrowRight.forEach(arrow => {
    arrow.addEventListener("click", function(){
        if(current === sliderImages.length - 1){
            current = -1;
        }
        slideRight();
        modalImg.src = `img/galeria/${current}.jpg`;
    });
})

startSlide();